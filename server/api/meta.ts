import { Request, Response } from "express";
import * as fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default (_: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");

  readFile("./meta.json")
    .then(data => res.end(data.toString()))
    .catch(() => {
      res.writeHead(500);
      res.end(`{error: "500"}`);
    });
};
