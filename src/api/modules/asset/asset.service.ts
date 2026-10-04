import type { AssetRepository } from "./asset.repository.js";
import type { CreateAssetPayload, UpdateAssetPayload, AssetQuery } from "./asset.schema.js";

export class AssetService {
  constructor(private readonly repository: AssetRepository) {}

  async getAsset(id: string) {
    return this.repository.findById(id);
  }

  async listAssets(query: AssetQuery) {
    return this.repository.findPage(query);
  }

  async createAsset(payload: CreateAssetPayload, authorId?: string) {
    // Platform Core identity would provide the authorId. Mocking for now if not provided.
    const finalAuthorId = authorId || "00000000-0000-0000-0000-000000000000";
    return this.repository.create(payload, finalAuthorId);
  }

  async updateAsset(id: string, payload: UpdateAssetPayload) {
    return this.repository.update(id, payload);
  }

  async deleteAsset(id: string) {
    return this.repository.delete(id);
  }
}
