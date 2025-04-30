import express from "express";
import dotenv from "dotenv";

import AuthRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";

dotenv.config();
const app = express();

app.use("/api/auth", AuthRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on PORT:${port}`);
  connectDb();
});
