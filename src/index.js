import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import processesRouters from "./routes/processesRoutes.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(processesRouters);

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
