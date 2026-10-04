import { labProvider } from "./lab.provider.js";
import { createLabRoutes } from "./lab.routes.js";

export function createLabProvider() {
  return {
    routes: createLabRoutes(),
    public: labProvider,
  };
}
