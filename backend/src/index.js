import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import AuthRoutes from "./routes/auth.route.js";
import MessageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

// ✅ Allow larger JSON and URL-encoded bodies
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // or your frontend URL in production
    credentials: true,
  })
);

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", MessageRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`✅ Server is running on PORT: ${PORT}`);
  connectDb();
});
