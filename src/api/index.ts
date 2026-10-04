import { resolve } from "node:path";
import { createApplicationServer, readApplicationConfig } from "@devxcrew/core-framework";
import Fastify from "fastify";
import { createAssetProvider } from "./modules/asset/index.js";
import { createDiscoveryProvider, createDiscoveryRoutes } from "./discovery/index.js";
import { createLabProvider } from "./lab/index.js";
import { createRemixProvider, remixRoutes } from "./remix/index.js";

const config = readApplicationConfig(process.env);
const frontendDirectory = resolve("dist/frontend");
const server = createApplicationServer({ config, frontendDirectory });
let closeFrontend: (() => Promise<void>) | undefined;

const fastify = Fastify();
const assetProvider = createAssetProvider();
const discoveryProvider = createDiscoveryProvider(assetProvider.contract);
const labProvider = createLabProvider();
const remixProvider = createRemixProvider({
  getAssetById: assetProvider.contract.getAssetById,
  createAsset: async (data: { title: string; authorId: string }) => {
    const asset = await assetProvider.contract.createAsset({
      title: data.title,
      description: "Remixed asset",
      category: "other",
      tags: [],
      version: "1.0.0",
      license: "MIT",
      compatibility: [],
      technology: ["React"],
      rootNode: { id: "1", type: "root", props: {} }
    }, data.authorId);
    return { id: asset.id };
  }
}, {
  getDraft: async (id: string, userId: string, organizationId: string) => {
    const draft = await labProvider.public.getDraft(id);
    if (!draft) return null;
    return {
      sourceAssetId: draft.assetId,
      tree: draft.rootNode as Record<string, unknown>,
      userId: draft.ownerId || userId,
      organizationId,
    };
  }
});

assetProvider.registerRoutes(fastify);
labProvider.routes(fastify);
remixRoutes(fastify, remixProvider);

await fastify.ready();
const discoveryHandler = createDiscoveryRoutes(discoveryProvider);

if (config.mode === "development") {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true, ws: { server } },
    appType: "spa",
  });
  server.removeAllListeners("request");
  server.on("request", (request, response) => {
    if (request.url?.split("?")[0] === "/api/v1/discovery/search" || request.url?.startsWith("/api/v1/collections")) {
      discoveryHandler(request, response);
      return;
    }
    if (request.url?.split("?")[0] === "/api" || request.url?.startsWith("/api/")) {
      fastify.routing(request, response);
      return;
    }
    vite.middlewares(request, response, () => {
      response.writeHead(404);
      response.end("Not found");
    });
  });
  closeFrontend = () => vite.close();
} else {
  server.on("request", (request, response) => {
    if (request.url?.split("?")[0] === "/api/v1/discovery/search" || request.url?.startsWith("/api/v1/collections")) {
      discoveryHandler(request, response);
      return;
    }
    if (request.url?.split("?")[0] === "/api" || request.url?.startsWith("/api/")) {
      fastify.routing(request, response);
      return;
    }
  });
}

server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(config.port, config.host, () =>
  console.info(`${config.name} · ${config.mode} · ${config.url}`),
);
async function shutdown() {
  const timeout = setTimeout(() => process.exit(1), 10_000).unref();
  await closeFrontend?.();
  server.closeAllConnections();
  await new Promise<void>((resolveClose) => server.close(() => resolveClose()));
  clearTimeout(timeout);
}
process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);
