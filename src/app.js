import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // allow sites which can access the database
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //take json data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // take from url
app.use(express.static("public"));
app.use(cookieParser()); //for CRUD operations in user browser's cookies

export { app };
