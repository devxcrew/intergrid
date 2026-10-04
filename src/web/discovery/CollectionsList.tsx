import React, { useState, useEffect } from "react";
import { createWebDiscoveryProvider } from "./discovery.provider.js";
import type { Collection } from "../../api/discovery/discovery.schema.js";

const provider = createWebDiscoveryProvider();

export function CollectionsList({ onSelectCollection }: { onSelectCollection: (id: string) => void }) {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    provider.listCollections()
      .then(setCollections)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500 p-6">Error: {error}</div>;

  return (
    <div className="collections-list p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Collections</h1>
        <button className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Create New</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.length === 0 ? (
          <p className="text-gray-500 italic col-span-3">No collections found.</p>
        ) : (
          collections.map((collection) => (
            <div 
              key={collection.id} 
              className="border p-4 rounded shadow-sm bg-white cursor-pointer hover:border-blue-300 transition-colors"
              onClick={() => onSelectCollection(collection.id)}
            >
              <h3 className="font-semibold text-lg">{collection.title}</h3>
              {collection.description && <p className="text-sm text-gray-600 mt-1 truncate">{collection.description}</p>}
              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>{collection.itemIds.length} items</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
