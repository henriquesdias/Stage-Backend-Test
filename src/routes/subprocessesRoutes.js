import { Router } from "express";

import validateBody from "../middlewares/validateBody.js";
import subprocessesControllers from "../controllers/subprocessesControlers.js";
import subprocessesSchemas from "../schemas/subprocessesSchemas.js";

const subprocessesRouters = Router();

subprocessesRouters.post(
  "/subprocesses",
  validateBody(subprocessesSchemas.subprocessSchema),
  subprocessesControllers.createSubprocess
);

export default subprocessesRouters;
