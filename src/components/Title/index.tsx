import * as React from "react";
import { BookType } from "types/book";
import { Button } from "semantic-ui-react";
import Link from "next/link";

interface Props {
  book: BookType;
}

const Title: React.FC<Props> = ({ book }) => (
  <div className={"mt-n-3"}>
    <Link href="/rozbory" passHref>
      <Button as="a">Zpět</Button>
    </Link>
    <h1>{book.name}</h1>
    <h2>{book.author}</h2>
  </div>
);

export default Title;
