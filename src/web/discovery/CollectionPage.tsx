import React, { useState, useEffect } from "react";
import { createWebDiscoveryProvider } from "./discovery.provider.js";
import type { Collection } from "../../api/discovery/discovery.schema.js";

const provider = createWebDiscoveryProvider();

export function CollectionPage({ collectionId }: { collectionId: string }) {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    provider.getCollection(collectionId)
      .then(setCollection)
      .catch(err => setError(err.message));
  }, [collectionId]);

  if (error) return <div className="text-red-500 p-6">Error: {error}</div>;
  if (!collection) return <div className="p-6 text-gray-500">Loading collection...</div>;

  return (
    <div className="collection-page p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{collection.title}</h1>
        {collection.description && <p className="text-gray-600 text-lg">{collection.description}</p>}
        <div className="mt-4 text-sm text-gray-500 flex gap-4">
          <span>By {collection.authorId}</span>
          <span>•</span>
          <span>{new Date(collection.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collection.itemIds.length === 0 ? (
          <p className="text-gray-500 italic">This collection is empty.</p>
        ) : (
          <div className="bg-gray-50 border p-4 rounded text-center">
            <p className="text-gray-600">Contains {collection.itemIds.length} Asset{collection.itemIds.length !== 1 && 's'}</p>
            {/* Note: In a complete implementation, this would list hydrating cards fetched from Agent 1's Asset Provider */}
          </div>
        )}
      </div>
    </div>
  );
}
