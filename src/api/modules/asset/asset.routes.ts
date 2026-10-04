import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { assetSchema, createAssetSchema, updateAssetSchema, assetQuerySchema } from "./asset.schema.js";
import type { AssetService } from "./asset.service.js";

const idSchema = z.object({ id: z.string().uuid() });

const paginatedResponseSchema = z.object({
  data: z.array(assetSchema),
  meta: z.object({
    current_page: z.number(),
    per_page: z.number(),
    total: z.number(),
    last_page: z.number(),
  }),
  links: z.object({
    first: z.string(),
    last: z.string(),
    prev: z.string().nullable(),
    next: z.string().nullable(),
  })
});

function formatZodError(error: z.ZodError) {
  const errors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const path = issue.path.join(".") || "root";
    if (!errors[path]) errors[path] = [];
    errors[path].push(issue.message);
  }
  return { message: "Validation failed", errors };
}

export function registerAssetRoutes(app: FastifyInstance, service: AssetService) {
  app.get("/api/v1/assets", async (request, reply) => {
    const parsed = assetQuerySchema.safeParse(request.query || {});
    if (!parsed.success) {
      return reply.status(422).send(formatZodError(parsed.error));
    }
    const page = await service.listAssets(parsed.data);
    return reply.send(paginatedResponseSchema.parse(page));
  });

  app.get("/api/v1/assets/:id", async (request, reply) => {
    const paramsParsed = idSchema.safeParse(request.params);
    if (!paramsParsed.success) {
      return reply.status(422).send(formatZodError(paramsParsed.error));
    }
    const asset = await service.getAsset(paramsParsed.data.id);
    if (!asset) {
      return reply.status(404).send({ message: "Asset not found" });
    }
    return reply.send(assetSchema.parse(asset));
  });

  app.post("/api/v1/assets", async (request, reply) => {
    const parsed = createAssetSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(422).send(formatZodError(parsed.error));
    }
    const asset = await service.createAsset(parsed.data);
    return reply.status(201).send(assetSchema.parse(asset));
  });

  app.put("/api/v1/assets/:id", async (request, reply) => {
    const paramsParsed = idSchema.safeParse(request.params);
    if (!paramsParsed.success) {
      return reply.status(422).send(formatZodError(paramsParsed.error));
    }
    const parsed = updateAssetSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(422).send(formatZodError(parsed.error));
    }
    const asset = await service.updateAsset(paramsParsed.data.id, parsed.data);
    if (!asset) {
      return reply.status(404).send({ message: "Asset not found" });
    }
    return reply.send(assetSchema.parse(asset));
  });

  app.delete("/api/v1/assets/:id", async (request, reply) => {
    const paramsParsed = idSchema.safeParse(request.params);
    if (!paramsParsed.success) {
      return reply.status(422).send(formatZodError(paramsParsed.error));
    }
    const success = await service.deleteAsset(paramsParsed.data.id);
    if (!success) {
      return reply.status(404).send({ message: "Asset not found" });
    }
    return reply.status(204).send(null);
  });
}
