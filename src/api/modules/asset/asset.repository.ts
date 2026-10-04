import crypto from "node:crypto";
import type { Asset, CreateAssetPayload, UpdateAssetPayload, AssetQuery } from "./asset.schema.js";
import type { PaginatedAssets } from "./asset.types.js";

// In-memory store since persistence needs Platform Core (per TASK.md)
export class AssetRepository {
  private assets: Asset[] = [];

  constructor() {
    this.seed();
  }

  private seed() {
    this.assets.push({
      id: crypto.randomUUID(),
      title: "Primary Button",
      description: "A standard primary button with hover states and loading indicator.",
      category: "buttons",
      tags: ["ui", "core", "interaction"],
      authorId: crypto.randomUUID(),
      version: "1.0.0",
      license: "MIT",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      compatibility: ["react", "vue", "html"],
      technology: ["tailwindcss", "react", "framer-motion"],
      rootNode: {
        id: crypto.randomUUID(),
        type: "button",
        props: { label: "Click Me", variant: "primary" },
      },
      tokens: {
        colors: { primary: "#007bff" },
        spacing: { padding: "12px 24px" },
      }
    });
    this.assets.push({
      id: crypto.randomUUID(),
      title: "Hero Section with Video",
      description: "A hero section featuring a background video loop and floating call to action.",
      category: "hero",
      tags: ["landing", "marketing"],
      authorId: crypto.randomUUID(),
      version: "1.2.0",
      license: "MIT",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      compatibility: ["react"],
      technology: ["tailwindcss", "react"],
    });
  }

  async findById(id: string): Promise<Asset | null> {
    return this.assets.find(a => a.id === id) || null;
  }

  async findPage(query: AssetQuery): Promise<PaginatedAssets> {
    let filtered = [...this.assets];

    if (query.search) {
      const q = query.search.toLowerCase();
      filtered = filtered.filter(
        a => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
      );
    }

    if (query.category) {
      filtered = filtered.filter(a => a.category === query.category);
    }

    filtered.sort((a, b) => {
      const aVal = a[query.sort];
      const bVal = b[query.sort];
      if (query.direction === "asc") {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });

    const total = filtered.length;
    const lastPage = Math.ceil(total / query.limit) || 1;
    const start = (query.page - 1) * query.limit;
    const data = filtered.slice(start, start + query.limit);

    const baseUrl = "/api/v1/assets";
    const baseQuery = new URLSearchParams();
    if (query.search) baseQuery.set("search", query.search);
    if (query.category) baseQuery.set("category", query.category);
    baseQuery.set("sort", query.sort);
    baseQuery.set("direction", query.direction);
    baseQuery.set("limit", query.limit.toString());

    const qs = baseQuery.toString();
    const prefix = qs ? `&${qs}` : "";

    return {
      data,
      meta: {
        current_page: query.page,
        per_page: query.limit,
        total,
        last_page: lastPage,
      },
      links: {
        first: `${baseUrl}?page=1${prefix}`,
        last: `${baseUrl}?page=${lastPage}${prefix}`,
        prev: query.page > 1 ? `${baseUrl}?page=${query.page - 1}${prefix}` : null,
        next: query.page < lastPage ? `${baseUrl}?page=${query.page + 1}${prefix}` : null,
      }
    };
  }

  async create(payload: CreateAssetPayload, authorId: string): Promise<Asset> {
    const asset: Asset = {
      ...payload,
      id: crypto.randomUUID(),
      authorId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.assets.push(asset);
    return asset;
  }

  async update(id: string, payload: UpdateAssetPayload): Promise<Asset | null> {
    const index = this.assets.findIndex(a => a.id === id);
    if (index === -1) return null;

    const existing = this.assets[index];
    const updated: Asset = {
      ...existing,
      ...payload,
      updatedAt: new Date().toISOString(),
    };
    this.assets[index] = updated;
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.assets.findIndex(a => a.id === id);
    if (index === -1) return false;
    this.assets.splice(index, 1);
    return true;
  }
}
