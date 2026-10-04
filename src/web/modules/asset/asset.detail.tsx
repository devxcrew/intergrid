import { useParams, Link } from "@tanstack/react-router";
import { useAsset } from "./asset.hooks.js";

export function AssetDetail() {
  const { assetId } = useParams({ strict: false }) as { assetId: string };
  const { data: asset, loading, error } = useAsset(assetId);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error || !asset) return <div className="p-6">Error loading asset</div>;

  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to={"/desk/assets" as never} className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Assets
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{asset.title}</h1>
            <p className="text-gray-500 mt-1">Version {asset.version} • {asset.license}</p>
          </div>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
            {asset.category}
          </span>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{asset.description || "No description provided."}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Metadata</h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Author ID</dt>
              <dd className="mt-1 text-sm text-gray-900">{asset.authorId}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Created At</dt>
              <dd className="mt-1 text-sm text-gray-900">{new Date(asset.createdAt).toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Updated At</dt>
              <dd className="mt-1 text-sm text-gray-900">{new Date(asset.updatedAt).toLocaleString()}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Stack & Tags</h2>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {asset.tags.length > 0 ? asset.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  {tag}
                </span>
              )) : <span className="text-sm text-gray-400">None</span>}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Technology</h3>
            <div className="flex flex-wrap gap-2">
              {asset.technology.length > 0 ? asset.technology.map(tech => (
                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  {tech}
                </span>
              )) : <span className="text-sm text-gray-400">None</span>}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Compatibility</h3>
            <div className="flex flex-wrap gap-2">
              {asset.compatibility.length > 0 ? asset.compatibility.map(comp => (
                <span key={comp} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                  {comp}
                </span>
              )) : <span className="text-sm text-gray-400">None</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
