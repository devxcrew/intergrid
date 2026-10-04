/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SearchQuery, Collection } from "../../api/discovery/discovery.schema.js";

// Frontend provider to interact with the backend Discovery resource APIs
export interface WebDiscoveryProvider {
  search(query: SearchQuery): Promise<any[]>;
  getCollection(id: string): Promise<Collection>;
  listCollections(): Promise<Collection[]>;
}

export function createWebDiscoveryProvider(apiBaseUrl: string = "/api/v1"): WebDiscoveryProvider {
  return {
    async search(query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) searchParams.append(key, String(value));
      }
      const response = await fetch(`${apiBaseUrl}/discovery/search?${searchParams.toString()}`);
      if (!response.ok) throw new Error("Search failed");
      return response.json();
    },
    async getCollection(id) {
      const response = await fetch(`${apiBaseUrl}/collections/${id}`);
      if (!response.ok) throw new Error("Failed to fetch collection");
      return response.json();
    },
    async listCollections() {
      const response = await fetch(`${apiBaseUrl}/collections`);
      if (!response.ok) throw new Error("Failed to fetch collections");
      return response.json();
    }
  };
}
