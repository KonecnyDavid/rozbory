import { BookType } from "./book";
import { AuthorType } from "./author";

export interface MetaData {
  books: Array<BookType & MetaFile>;
  authors: AuthorType[];
}

export interface MetaFile {
  url: string;
  file: string;
}
