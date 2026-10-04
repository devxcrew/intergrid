import {
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
  Outlet,
} from "@tanstack/react-router";
import { HomePage } from "./public/HomePage";

const root = createRootRoute({ component: Outlet });
const home = createRoute({ getParentRoute: () => root, path: "/", component: HomePage });
const login = createRoute({
  getParentRoute: () => root,
  path: "/login",
  component: lazyRouteComponent(() => import("./auth/Login"), "Login"),
});
const desk = createRoute({
  getParentRoute: () => root,
  path: "/desk",
  component: lazyRouteComponent(() => import("./desk/Desk"), "Desk"),
});

// Import createAssetRoutes from asset module
import { createAssetRoutes } from "./modules/asset/asset.routes";
const assetRoutes = createAssetRoutes(desk);

// Discovery Routes
const explore = createRoute({
  getParentRoute: () => root,
  path: "/explore",
  component: lazyRouteComponent(() => import("./discovery/DiscoveryPage"), "DiscoveryPage"),
});
import * as React from "react";
import { useParams, useNavigate } from "@tanstack/react-router";

const CollectionsListWrapper = () => {
  const navigate = useNavigate();
  const Comp = React.lazy(() => import("./discovery/CollectionsList").then(m => ({ default: m.CollectionsList })));
  return <React.Suspense fallback={null}><Comp onSelectCollection={(id: string) => navigate({ to: `/collections/${id}` })} /></React.Suspense>;
};

const CollectionPageWrapper = () => {
  const { collectionId } = useParams({ strict: false }) as { collectionId: string };
  const Comp = React.lazy(() => import("./discovery/CollectionPage").then(m => ({ default: m.CollectionPage })));
  return <React.Suspense fallback={null}><Comp collectionId={collectionId} /></React.Suspense>;
};

const LabWorkspaceWrapper = () => {
  const { draftId } = useParams({ strict: false }) as { draftId: string };
  const Comp = React.lazy(() => import("./lab/LabWorkspace").then(m => ({ default: m.LabWorkspace })));
  return <React.Suspense fallback={null}><Comp draftId={draftId} /></React.Suspense>;
};

const collections = createRoute({
  getParentRoute: () => root,
  path: "/collections",
  component: CollectionsListWrapper,
});
const collectionDetail = createRoute({
  getParentRoute: () => root,
  path: "/collections/$collectionId",
  component: CollectionPageWrapper,
});

// Lab Routes
const labWorkspace = createRoute({
  getParentRoute: () => root,
  path: "/lab/$draftId",
  component: LabWorkspaceWrapper,
});

export const router = createRouter({
  routeTree: root.addChildren([home, login, desk.addChildren(assetRoutes), explore, collections, collectionDetail, labWorkspace]),
  defaultNotFoundComponent: () => <HomePage />,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
