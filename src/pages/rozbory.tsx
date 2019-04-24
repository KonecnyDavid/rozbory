import * as React from "react";
import fetch from "isomorphic-unfetch";
import { Input, Card } from "semantic-ui-react";
import { BookType } from "../types/book";
import { NextContext } from "next";
import Link from "next/link";

interface Props {
  books: BookType[];
}

interface State {
  input: string;
}

class Rozbory extends React.Component<Props, State> {
  private static async getInitialProps({ req }: NextContext) {
    const host = req ? req.headers.host : window.location.host;
    const protocol = "http:";
    const books = await fetch(`${protocol}//${host}/api/meta`).then(r =>
      r.json()
    );

    return { books };
  }

  public state: State = { input: "" };

  public render() {
    return (
      <div>
        <h2>Vyhledávat rozbory</h2>
        <Input
          placeholder="Název knihy,autor, druh, žánr"
          fluid
          onChange={e => this.setState({ input: e.target.value })}
        />
        <div className="mt-1">
          {this.props.books.filter(this.filter).map(b => (
            <Link href={"rozbor/" + b.meta.url} key={b.name}>
              <a>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>
                      {b.name}
                      <span className="f-right text-normal text-gray">
                        {b.type}; {b.genre}
                      </span>
                    </Card.Header>
                    <Card.Meta>{b.author}</Card.Meta>
                  </Card.Content>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  private filter = ({ name, author, genre, type }: BookType) => {
    const i = this.state.input;
    return (
      name.includes(i) ||
      author.includes(i) ||
      genre.includes(i) ||
      type.includes(i)
    );
  };
}

export default Rozbory;
