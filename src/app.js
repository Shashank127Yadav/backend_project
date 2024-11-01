import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// This option sets the allowed origin(s) that can make requests to the server.
// By using an environment variable (process.env.CORS_ORIGIN), you can control which domains have access, such as restricting it to specific frontend URLs.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //take json data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // take from url
app.use(express.static("public")); // This is useful for serving assets like images, CSS, JavaScript files, and other public resources.
app.use(cookieParser()); //for CRUD operations in user browser's cookies
// handle session data or user-specific info in cookies.

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register

export { app };
