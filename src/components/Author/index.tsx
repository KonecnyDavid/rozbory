import * as React from "react";
import { AuthorType } from "types/author";
import { Header, Flag, Card, List } from "semantic-ui-react";
import fetch from "isomorphic-unfetch";
import Image from "components/Image";
import { StyledAuthorCard } from "./styles";
import * as meta from "../../../meta.json";
import { withRouter, WithRouterProps } from "next/router";

interface Props {
  author: AuthorType;
  wikiText?: boolean;
}

interface WikiSummary {
  title: string;
  displaytitle: string;
  extract: string;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  originalimage: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  description: string;
}

const AuthorComponent: React.FC<Props & WithRouterProps> = ({
  author: { name, nationality, life, wikiTitle },
  wikiText,
  router
}) => {
  const books = meta.books.filter(
    b =>
      b.author === wikiTitle && b.meta.url !== router!.pathname.split("/").pop()
  );

  const [data, setData] = React.useState<WikiSummary>();
  React.useEffect(() => {
    !data &&
      fetch("https://cs.wikipedia.org/api/rest_v1/page/summary/" + wikiTitle)
        .then(res => res.json())
        .then((d: any) => setData(d));
  });

  return (
    <>
      <Header className="author-name mb-1" as="h2">
        Autor
      </Header>
      <StyledAuthorCard className="f-right">
        <Card.Content className="text-center">
          <Image
            width={200}
            height={200}
            src={data ? data.thumbnail.source : ""}
            alt={name}
          />
          <Card.Header className="mt-1">{name}</Card.Header>
          <Card.Meta>{data && data.description}</Card.Meta>
          <small>
            <Flag name={nationality} />
            {life}
          </small>

          {books.length !== 0 && (
            <Card.Description className="mt-1 mb-1">
              <strong>Další díla:</strong>
              <List className="mt-0">
                {books.map(b => (
                  <List.Item key={b.meta.file}>{b.name}</List.Item>
                ))}
              </List>
            </Card.Description>
          )}

          <Card.Meta className="text-right source">
            <small>
              Zdroj:{" "}
              <a
                href={"https://cs.wikipedia.org/wiki/" + wikiTitle}
                target="_blank"
              >
                wikipedie.cz
              </a>
            </small>
          </Card.Meta>
        </Card.Content>
      </StyledAuthorCard>
      {wikiText && <p>{data ? data.extract : "    "}</p>}
    </>
  );
};

export default withRouter(AuthorComponent);
