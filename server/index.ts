import * as next from "next";
import * as express from "express";
import api from "./api";
import * as compression from "compression";

const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "./src"
});

const handler = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .use(compression())
    .get("/api*", (req, res) => api(req, res))
    .use((req, res) => handler(req, res))
    .addListener("error", () => (err: Error) => {
      console.log(err);
      throw err;
    })
    .listen(3001, () => {
      console.log(`> Ready on http://localhost:3001`);
    });
});
