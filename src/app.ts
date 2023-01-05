import express from "express";
import cors from "cors";

require("dotenv").config();

const app = express();

app.use("/public", express.static(process.cwd() + "/public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




export default app;
