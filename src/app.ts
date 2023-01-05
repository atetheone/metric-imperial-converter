import express from "express";
import cors from "cors";
import { indexRouter } from "./routes";
import { apiRouter } from "./routes/api";

require("dotenv").config();

const app = express();

app.use("/public", express.static(process.cwd() + "/src/public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
app.use(apiRouter)

export default app;
