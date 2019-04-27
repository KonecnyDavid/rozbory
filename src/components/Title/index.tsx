import * as React from "react";
import { BookType } from "types/book";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import Head from "next/head";
import { StyledTitle } from "./styles";
import * as meta from "../../../meta.json";

interface Props {
  book: BookType;
}

const Title: React.FC<Props> = ({ book }) => {
  const author = meta.authors.find(a => a.wikiTitle === book.author);
  return (
    <StyledTitle>
      <Head>
        <title>{book.name} - MaturitniRozbory.cz</title>
        <meta
          name="description"
          content={`Autor: ${author ? author.name : book.author} | Žánr: ${
            book.genre
          } | ${book.timespace}`}
        />

        {book.image && (
          <meta
            name="og:image"
            property="og:image"
            content={"https://maturitnirozbory.cz/static/rozbor/" + book.image}
          />
        )}

        <meta
          name="og:title"
          property="og:title"
          content={book.name + " (MaturitniRozbory.cz)"}
        />
        <meta name="og:type" property="og:type" content={"article"} />
        <meta
          name="og:title"
          property="og:description"
          content={`Autor: ${book.author} | Žánr: ${book.genre} | ${
            book.timespace
          }`}
        />
      </Head>
      <Link href="/" passHref>
        <Button as="a">Zpět</Button>
      </Link>
      <p className="sign text-gray">
        <i>MaturitniRozbory.cz</i>
      </p>
      <h1>{book.name}</h1>
      <h2>{author ? author.name : book.author}</h2>
    </StyledTitle>
  );
};

export default Title;
