import * as React from "react";
import { BookType } from "types/book";
import { Button, Icon } from "semantic-ui-react";
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
          name="og:description"
          property="og:description"
          content={`Autor: ${author ? author.name : book.author}   | Žánr: ${
            book.genre
          } | ${book.timespace}`}
        />
      </Head>
      <Link href="/" passHref  as={`${process.env.ASSET_PREFIX}/`}>
        <Button as="a">Zpět</Button>
      </Link>
      <Button basic onClick={() => window.print()}>Tisknout</Button>

      <p className="sign text-gray">
        <i>MaturitniRozbory.cz</i>
      </p>
      <h1>
        {book.name} {book.released && `(${book.released})`}
      </h1>
      <h2>{author ? author.name : book.author}</h2>
    </StyledTitle>
  );
};

export default Title;
