import { Router } from "express";

import eventsControllers from "../controllers/eventsControllers.js";
import validateBody from "../middlewares/validateBody.js";
import eventsSchemas from "../schemas/eventsSchemas.js";

const eventsRouters = Router();

eventsRouters
  .get("/events/:subprocess_id", eventsControllers.getAllEvents)
  .delete("/events/:event_id", eventsControllers.deleteEvent)
  .post(
    "/events/:subprocess_id",
    validateBody(eventsSchemas.eventSchema),
    eventsControllers.createEvent
  );

export default eventsRouters;
