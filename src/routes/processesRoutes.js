import { Router } from "express";

import processesControllers from "../controllers/processesControllers.js";
import validateBody from "../middlewares/validateBody.js";
import processSchemas from "../schemas/processesSchemas.js";

const processesRouters = Router();

processesRouters
  .post(
    "/processes",
    validateBody(processSchemas.processSchema),
    processesControllers.createProcess
  )
  .delete("/processes/:id", processesControllers.deleteProcess);

export default processesRouters;
