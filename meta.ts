import * as fs from "fs";
import * as babel from "@babel/core";
import * as requireFromString from "require-from-string";
import { promisify } from "util";
import { parse } from "path";
import { MetaData } from "./src/types/meta";
const mdx = require("remark-mdx");
const remark = require("remark");
const { read } = require("to-vfile");

const transform = (code: string) =>
  babel.transform(code, {
    presets: ["@babel/preset-env"],
    plugins: [
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  })!.code!;

const readDir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const main = async () => {
  const meta: MetaData = {
    books: [],
    authors: []
  };

  const getFileExport = (file: string) => {
    return new Promise(res => {
      read(file).then((file: any) => {
        remark()
          .use(mdx)
          .use(() => (tree: any) => {
            tree.children.map((n: any) => {
              if (n.type === "export") {
                const m = requireFromString(transform(n.value));

                res(m);
              }
            });
          })
          .process(file);
      });
    });
  };

  const getDirExports = (
    dir: string,
    callback: (m: any, f: string) => unknown
  ) =>
    readDir(dir).then(files =>
      files.map(f =>
        getFileExport(dir + "/" + f).then((m: any) => callback(m, f))
      )
    );

  const books = await getDirExports("./src/pages/rozbor", (m, file) => {
    console.log("[book] " + m.book.name);
    meta.books.push({ ...m.book, meta: { file, url: parse(file).name } });
  });

  const authors = await getDirExports("./src/components/Author/Authors", m => {
    console.log("[author] " + m.author.name);
    meta.authors.push(m.author);
  });

  await Promise.all(books);
  await Promise.all(authors);

  await writeFile("meta.json", JSON.stringify(meta));
};
main();
