import type { SearchQuery, Collection, CreateCollection } from "./discovery.schema.js";
import { randomUUID } from "node:crypto";

// Matches Agent 1's stated contract in Log 1.1
export interface AssetProviderContract {
  getAssetById(id: string): Promise<unknown>;
  searchAssets(query: Record<string, unknown>): Promise<unknown>;
}

// The Discovery module's public contract
export interface DiscoveryProviderContract {
  search(query: SearchQuery): Promise<unknown>;
  getCollection(id: string): Promise<Collection | null>;
  createCollection(data: CreateCollection, authorId: string): Promise<Collection>;
  listCollections(): Promise<Collection[]>;
}

export function createDiscoveryProvider(assetProvider: AssetProviderContract): DiscoveryProviderContract {
  const collections: Collection[] = [];

  return {
    async search(query) {
      return assetProvider.searchAssets(query);
    },
    async getCollection(id) {
      const collection = collections.find(c => c.id === id);
      if (!collection) return null;
      // In a real implementation we might hydrate itemIds using assetProvider.getAssetById(id)
      return collection;
    },
    async createCollection(data, authorId) {
      const newCollection: Collection = {
        id: randomUUID(),
        ...data,
        authorId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      collections.push(newCollection);
      return newCollection;
    },
    async listCollections() {
      return collections;
    }
  };
}
