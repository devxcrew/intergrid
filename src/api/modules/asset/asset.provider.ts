import type { FastifyInstance } from "fastify";
import { AssetRepository } from "./asset.repository.js";
import { AssetService } from "./asset.service.js";
import { registerAssetRoutes } from "./asset.routes.js";
import type { AssetProviderContract } from "./asset.types.js";

export function createAssetProvider(): {
  contract: AssetProviderContract;
  registerRoutes: (app: FastifyInstance) => void;
} {
  const repository = new AssetRepository();
  const service = new AssetService(repository);

  const contract: AssetProviderContract = {
    async getAssetById(id: string) {
      return service.getAsset(id);
    },
    async searchAssets(query: Record<string, unknown>) {
      // Internal contract used by discovery module
      const page = await service.listAssets({
        page: Number(query.page) || 1,
        limit: Number(query.limit) || 20,
        search: query.query ? String(query.query) : "",
        category: typeof query.type === "string" ? query.type : undefined,
        sort: "createdAt",
        direction: "desc",
      });
      return page.data;
    },
    async createAsset(payload, authorId) {
      return service.createAsset(payload, authorId);
    }
  };

  return {
    contract,
    registerRoutes(app: FastifyInstance) {
      registerAssetRoutes(app, service);
    }
  };
}
