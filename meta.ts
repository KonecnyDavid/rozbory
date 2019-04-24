import * as fs from "fs";
import * as babel from "@babel/core";
import * as requireFromString from "require-from-string";
import { promisify } from "util";
import { parse } from "path";
const mdx = require("@mdx-js/mdx");

const getMdxExport = (f: string) => {
  const readFile = promisify(fs.readFile);

  const transform = (code: string) =>
    babel.transform(code, {
      presets: ["@babel/preset-env"],
      plugins: [
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-object-rest-spread"
      ]
    })!.code;

  return readFile("./src/pages/rozbor/" + f)
    .then(file => mdx(file))
    .then(
      jsx =>
        requireFromString(transform(jsx)!, {
          prependPaths: ["src/"]
        }).book
    );
};

const readDir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const main = () => {
  readDir("./src/pages/rozbor").then(files => {
    Promise.all(
      files.map(f =>
        getMdxExport(f).then(r => ({
          ...r,
          meta: { file: f, url: parse(f).name }
        }))
      )
    ).then(result => writeFile("meta.json", JSON.stringify(result)));
  });
};
main();
