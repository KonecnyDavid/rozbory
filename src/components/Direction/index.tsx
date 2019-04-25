import * as React from "react";
import { Header, Card, List } from "semantic-ui-react";
import * as meta from "../../../meta.json";
import { DirectionType } from "types/direction";
import { withRouter, WithRouterProps } from "next/router";
import { WikiSummary } from "types/wiki.js";
import { StyledSideCard } from "components/SideCard/styles";

interface Props {
  direction: DirectionType;
  wikiText?: boolean;
}

const Direction: React.FC<Props & WithRouterProps> = ({
  direction: { name, wikiTitle, authors },
  wikiText,
  router
}) => {
  const book = meta.books.find(
    b => b.meta.url === router!.pathname.split("/").pop()
  );
  const author = meta.authors.find(a => !!book && a.wikiTitle === book.author);
  const otherAuthors = meta.authors.filter(
    a =>
      a.direction === wikiTitle &&
      (!author || a.wikiTitle !== author!.wikiTitle)
  );

  const [data, setData] = React.useState<WikiSummary>();
  React.useEffect(() => {
    !data &&
      wikiText &&
      fetch("https://cs.wikipedia.org/api/rest_v1/page/summary/" + wikiTitle)
        .then(res => res.json())
        .then((d: any) => setData(d));
  });

  return (
    <>
      <div className="clear-fix" />
      <Header className="author-name mb-1" as="h2">
        {name}
      </Header>
      {(authors.length !== 0 || otherAuthors.length !== 0) && (
        <StyledSideCard className="f-right text-center">
          <Card.Content>
            <Card.Header>Další autoři</Card.Header>
            <Card.Description>
              <List>
                {otherAuthors.map(a => (
                  <List.Item key={a.wikiTitle}>{a.name}</List.Item>
                ))}
                {authors.map((a, i) => (
                  <List.Item key={i}>{a}</List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
        </StyledSideCard>
      )}
      {data && (
        <p>
          {data.extract} <i className="text-gray">(Wikipedie)</i>
        </p>
      )}
    </>
  );
};

export default withRouter(Direction);
