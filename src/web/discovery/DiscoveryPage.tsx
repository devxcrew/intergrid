import React, { useState, useEffect } from "react";
import { createWebDiscoveryProvider } from "./discovery.provider.js";
import { type SearchQuery } from "../../api/discovery/discovery.schema.js";
import { useForm } from "@tanstack/react-form";

const provider = createWebDiscoveryProvider();

type AssetResult = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  authorId?: string;
  version?: string;
};

export function DiscoveryPage() {
  const [results, setResults] = useState<AssetResult[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Parse initial query from URL
  const getInitialParams = () => {
    if (typeof window === 'undefined') return { query: "", category: undefined };
    const params = new URLSearchParams(window.location.search);
    return {
      query: params.get("query") || "",
      category: params.get("category") || undefined,
    };
  };

  const initialParams = getInitialParams();

  const form = useForm({
    defaultValues: {
      query: initialParams.query,
      category: initialParams.category as string | undefined,
    },
    onSubmit: async ({ value }) => {
      // Sync to URL
      const url = new URL(window.location.href);
      if (value.query) {
        url.searchParams.set("query", value.query);
      } else {
        url.searchParams.delete("query");
      }
      
      if (value.category) {
        url.searchParams.set("category", value.category);
      } else {
        url.searchParams.delete("category");
      }
      window.history.pushState({}, "", url);

      // Perform Search
      await performSearch({
        query: value.query || undefined,
        category: value.category as "buttons" | "cards" | "navigation" | "hero" | "forms" | "animation" | "typography" | "layout" | "other" | undefined,
        page: 1,
        limit: 20
      });
    }
  });

  const performSearch = async (queryParams: SearchQuery) => {
    setLoading(true);
    try {
      const res = await provider.search(queryParams);
      setResults(res as AssetResult[]);
    } catch (err) {
      console.error("Search error", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial search on mount
  useEffect(() => {
    performSearch({
      query: initialParams.query || undefined,
      category: initialParams.category as "buttons" | "cards" | "navigation" | "hero" | "forms" | "animation" | "typography" | "layout" | "other" | undefined,
      page: 1,
      limit: 20
    });
    
    // Listen for popstate (back/forward)
    const handlePopState = () => {
      const currentParams = getInitialParams();
      form.setFieldValue("query", currentParams.query);
      form.setFieldValue("category", currentParams.category);
      performSearch({
        query: currentParams.query || undefined,
        category: currentParams.category as "buttons" | "cards" | "navigation" | "hero" | "forms" | "animation" | "typography" | "layout" | "other" | undefined,
        page: 1,
        limit: 20
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="discovery-page p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Assets</h1>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="mb-8 flex gap-4"
      >
        <form.Field
          name="query"
          children={(field) => (
            <input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Search assets by title or description..."
              className="border p-2 rounded w-full max-w-md"
            />
          )}
        />
        
        <form.Field
          name="category"
          children={(field) => (
            <select
              name={field.name}
              value={field.state.value || ""}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All Categories</option>
              <option value="buttons">Buttons</option>
              <option value="cards">Cards</option>
              <option value="navigation">Navigation</option>
              <option value="hero">Hero</option>
              <option value="forms">Forms</option>
              <option value="animation">Animation</option>
              <option value="typography">Typography</option>
              <option value="layout">Layout</option>
              <option value="other">Other</option>
            </select>
          )}
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-medium">
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-gray-500">Searching...</p>
        ) : results.length === 0 ? (
          <p className="text-gray-500">No results found. Try adjusting your filters.</p>
        ) : (
          results.map((item) => (
            <a 
              key={item.id} 
              href={`/desk/assets/${item.id}`}
              className="border p-4 rounded shadow-sm bg-white block hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg text-blue-600">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <div className="mt-3 flex gap-2">
                <span className="inline-block text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                  {item.category}
                </span>
                {item.version && (
                  <span className="inline-block text-xs bg-gray-50 text-gray-500 border px-2 py-1 rounded">
                    v{item.version}
                  </span>
                )}
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
