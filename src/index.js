import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import processesRouters from "./routes/processesRoutes.js";
import subprocessesRouters from "./routes/subprocessesRoutes.js";
import eventsRouters from "./routes/eventsRoutes.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(processesRouters);
server.use(subprocessesRouters);
server.use(eventsRouters);

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
