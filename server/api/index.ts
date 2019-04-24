import { Request, Response } from "express";
import { parse } from "url";
import meta from "./meta";

export default (req: Request, res: Response) => {
  if (req.url) {
    const url = parse(req.url, true);

    if (url.pathname === "/api/meta") {
      meta(req, res);
      return;
    }
  }
  res.writeHead(400);
  res.end("400 - Bad request");
};
