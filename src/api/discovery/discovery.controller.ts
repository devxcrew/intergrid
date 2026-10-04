import type { IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:url";
import { SearchQuerySchema, CreateCollectionSchema } from "./discovery.schema.js";
import type { DiscoveryProviderContract } from "./discovery.provider.js";

// Helper to parse JSON body
async function parseJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk.toString(); });
    req.on("end", () => {
      try { resolve(JSON.parse(body)); }
      catch (err) { reject(err); }
    });
  });
}

export function createDiscoveryRoutes(provider: DiscoveryProviderContract) {
  return async (req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url || "", true);
    const pathname = parsedUrl.pathname || "";

    if (req.method === "GET" && pathname === "/api/v1/discovery/search") {
      try {
        const query = SearchQuerySchema.parse(parsedUrl.query);
        const results = await provider.search(query);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      } catch (err: unknown) {
        res.writeHead(400, { "Content-Type": "application/json" });
        const errorMessage = err instanceof Error ? err.message : String(err);
        res.end(JSON.stringify({ error: errorMessage }));
      }
      return;
    }

    if (req.method === "GET" && pathname === "/api/v1/collections") {
      const collections = await provider.listCollections();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(collections));
      return;
    }

    if (req.method === "POST" && pathname === "/api/v1/collections") {
      try {
        const body = await parseJsonBody(req);
        const data = CreateCollectionSchema.parse(body);
        // Assuming a mocked authorId until auth is wired
        const newCollection = await provider.createCollection(data, "mock-author-id");
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newCollection));
      } catch (err: unknown) {
        res.writeHead(400, { "Content-Type": "application/json" });
        const errorMessage = err instanceof Error ? err.message : String(err);
        res.end(JSON.stringify({ error: errorMessage }));
      }
      return;
    }

    if (req.method === "GET" && pathname.startsWith("/api/v1/collections/")) {
      const id = pathname.split("/").pop();
      if (!id) {
        res.writeHead(400);
        res.end();
        return;
      }
      const collection = await provider.getCollection(id);
      if (!collection) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Collection not found" }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(collection));
      return;
    }

    // Pass through if not matched
  };
}
