import * as React from "react";
import { AuthorType } from "types/author";
import { Header, Flag } from "semantic-ui-react";

interface Props {
  author: AuthorType;
}

const Author: React.FC<Props> = ({ author: { name, nationality, life } }) => (
  <div>
    <Header className="author-name" as="h2">
      {name}
    </Header>
    <small>
      <Flag name={nationality} />
      {life}
    </small>
  </div>
);

export default Author;
