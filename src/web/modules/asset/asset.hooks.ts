import { useEffect, useState } from "react";
import { assetService, type PaginatedAssets } from "./asset.services.js";
import type { Asset } from "./asset.schema.js";

export function useAssets(searchParams: URLSearchParams) {
  const [data, setData] = useState<PaginatedAssets | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    assetService.listAssets(searchParams)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [searchParams.toString()]);

  return { data, error, loading };
}

export function useAsset(id: string) {
  const [data, setData] = useState<Asset | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    assetService.getAsset(id)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { data, error, loading };
}
