import { createRoute, lazyRouteComponent } from "@tanstack/react-router";

// We need the root route or desk route to attach these.
// We'll export a function to attach to the desk route.
export function createAssetRoutes(deskRoute: unknown) {
  const assetListRoute = createRoute({
    // @ts-expect-error - deskRoute type is unknown here
    getParentRoute: () => deskRoute,
    path: "/assets",
    component: lazyRouteComponent(() => import("./asset.list"), "AssetList"),
  });

  const assetDetailRoute = createRoute({
    // @ts-expect-error - deskRoute type is unknown here
    getParentRoute: () => deskRoute,
    path: "/assets/$assetId",
    component: lazyRouteComponent(() => import("./asset.detail"), "AssetDetail"),
  });

  return [assetListRoute, assetDetailRoute];
}
