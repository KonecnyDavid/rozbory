import * as React from "react";
import { Header, Card, List } from "semantic-ui-react";
import * as meta from "../../../meta.json";
import { DirectionType } from "types/direction";
import { withRouter, WithRouterProps } from "next/router";

interface Props {
  direction: DirectionType;
  wikiText?: boolean;
}

const Direction: React.FC<Props & WithRouterProps> = ({
  direction: { name, wikiTitle },
  router
}) => {
  const book = meta.books.find(
    b => b.meta.url === router!.pathname.split("/").pop()
  );
  const author = meta.authors.find(a => !!book && a.wikiTitle === book.author);
  const authors = meta.authors.filter(
    a =>
      a.direction === wikiTitle &&
      (!author || a.wikiTitle !== author!.wikiTitle)
  );

  return (
    <>
      <Header className="author-name mb-1" as="h2">
        {name}
      </Header>
      {authors.length !== 0 && (
        <Card className="f-right text-center">
          <Card.Content>
            <Card.Header>Autoři směru</Card.Header>
            <Card.Description>
              <List>
                {authors.map(a => (
                  <List.Item key={a.wikiTitle}>{a.name}</List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default withRouter(Direction);
