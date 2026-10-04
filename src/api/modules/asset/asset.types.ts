import type { Asset, CreateAssetPayload } from "./asset.schema.js";

export interface PaginatedAssets {
  data: Asset[];
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

export interface AssetProviderContract {
  getAssetById(id: string): Promise<Asset | null>;
  searchAssets(query: Record<string, unknown>): Promise<Asset[]>;
  createAsset(payload: CreateAssetPayload, authorId: string): Promise<Asset>;
}
