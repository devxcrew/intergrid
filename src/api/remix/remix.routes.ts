/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyInstance } from "fastify";
import type { RemixProviderContract } from "./remix.provider.js";
import { CreateVersionInputSchema, CreateRemixInputSchema } from "./remix.schema.js";

export async function remixRoutes(fastify: FastifyInstance, provider: RemixProviderContract) {
  fastify.get("/api/v1/assets/:assetId/versions", async (request, _reply) => {
    const { assetId } = request.params as { assetId: string };
    const versions = await provider.listVersions(assetId);
    return { data: versions };
  });

  fastify.post("/api/v1/assets/:assetId/versions", async (request, reply) => {
    const { assetId } = request.params as { assetId: string };
    const payload = request.body as unknown;

    const parsed = CreateVersionInputSchema.safeParse({ assetId, ...(payload as Record<string, unknown>) });
    if (!parsed.success) {
      return reply.status(422).send({ message: "Validation failed", errors: parsed.error.flatten().fieldErrors });
    }

    // Hardcoded author until platform core auth
    const authorId = "dev-user-id";
    try {
      const version = await provider.saveVersion(parsed.data, authorId);
      return reply.status(201).send({ data: version });
    } catch (err: unknown) {
      return reply.status(409).send({ message: err instanceof Error ? err.message : "Unknown error" });
    }
  });

  fastify.post("/api/v1/remixes", async (request, reply) => {
    const parsed = CreateRemixInputSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(422).send({ message: "Validation failed", errors: parsed.error.flatten().fieldErrors });
    }

    const authorId = "dev-user-id";
    try {
      const remix = await provider.createRemix(parsed.data, authorId);
      return reply.status(201).send({ data: remix });
    } catch (err: unknown) {
      return reply.status(409).send({ message: err instanceof Error ? err.message : "Unknown error" });
    }
  });
}
