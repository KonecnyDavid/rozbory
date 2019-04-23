import * as React from "react";
import { BookType } from "types/book";

interface Props {
  book: BookType;
}

const Title: React.FC<Props> = ({ book }) => (
  <>
    <h1>{book.name}</h1>
    <h2>{book.author}</h2>
  </>
);

export default Title;
