import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoutes from "./routes/auth.route.js";
import MessageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", AuthRoutes);
app.use("/api/message", MessageRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on PORT:${port}`);
  connectDb();
});
