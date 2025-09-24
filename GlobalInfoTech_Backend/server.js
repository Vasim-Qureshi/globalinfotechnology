// server.js
import express from "express";
import cors from "cors";
import ai from "./routes/aiRoutes.js";

const app = express(); // Create an Express application
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Use the AI routes for any requests to /api
app.use("/api", ai);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AI proxy server listening at http://localhost:${PORT}`);
});
