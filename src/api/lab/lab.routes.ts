import type { FastifyInstance } from "fastify";
import { labController } from "./lab.controller.js";

export function createLabRoutes() {
  return async function labRoutes(app: FastifyInstance) {
    app.get("/api/v1/labs/:id", labController.show);
    app.post("/api/v1/labs", labController.store);
    app.put("/api/v1/labs/:id", labController.update);
    app.delete("/api/v1/labs/:id", labController.destroy);
  };
}
