import type { Asset, CreateAssetPayload, UpdateAssetPayload } from "./asset.schema.js";

export interface PaginatedAssets {
  data: Asset[];
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

export const assetService = {
  async listAssets(searchParams: URLSearchParams): Promise<PaginatedAssets> {
    const response = await fetch(`/api/v1/assets?${searchParams.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch assets");
    return response.json();
  },

  async getAsset(id: string): Promise<Asset> {
    const response = await fetch(`/api/v1/assets/${id}`);
    if (!response.ok) throw new Error("Failed to fetch asset");
    return response.json();
  },

  async createAsset(payload: CreateAssetPayload): Promise<Asset> {
    const response = await fetch("/api/v1/assets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to create asset");
    return response.json();
  },

  async updateAsset(id: string, payload: UpdateAssetPayload): Promise<Asset> {
    const response = await fetch(`/api/v1/assets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to update asset");
    return response.json();
  },

  async deleteAsset(id: string): Promise<void> {
    const response = await fetch(`/api/v1/assets/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete asset");
  }
};
