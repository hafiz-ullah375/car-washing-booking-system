/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import cors from "cors";
import express, { Application } from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

//parsers
app.use(express.json());

app.use(cors({ origin: ["http://localhost:5173"] }));

// application routes
app.use("/api", router);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
