import { Link, useSearch } from "@tanstack/react-router";
import { useAssets } from "./asset.hooks.js";

export function AssetList() {
  const searchParams = useSearch({ strict: false });
  const urlParams = new URLSearchParams(searchParams as Record<string, string>);
  
  const { data, loading, error } = useAssets(urlParams);

  if (error) return <div>Error loading assets: {error.message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Assets</h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.data.map(asset => (
            <div key={asset.id} className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">
                  <Link to={"/desk/assets/$assetId" as never} params={{ assetId: asset.id } as never}>{asset.title}</Link>
                </h2>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  {asset.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {asset.description || "No description provided."}
              </p>
              <div className="flex flex-wrap gap-1">
                {asset.tags.map(tag => (
                  <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {data?.data.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-8">
              No assets found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
