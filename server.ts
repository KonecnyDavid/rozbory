import { createServer } from "http";
import * as next from "next";

const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "./src"
});

const handler = app.getRequestHandler();

app.prepare().then(() =>
  createServer((req, res) => {
    handler(req, res);
  })
    .addListener("error", (err: Error) => {
      console.log(err);
      throw err;
    })
    .listen(3001, () => {
      console.log(`> Ready on http://localhost:3001`);
    })
);
