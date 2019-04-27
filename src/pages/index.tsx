import * as React from "react";
import { Input, Card } from "semantic-ui-react";
import { BookType } from "../types/book";
import Link from "next/link";
import * as meta from "../../meta.json";

interface State {
  input: string;
}

class Rozbory extends React.Component<{}, State> {
  public state: State = { input: "" };

  public render() {
    const { books } = meta;
    return (
      <div>
        <h2>Vyhledávat rozbory</h2>
        <Input
          placeholder="Název knihy, autor, druh, žánr"
          fluid
          onChange={e => this.setState({ input: e.target.value })}
        />
        <div className="mt-1">
          {books.filter(this.filter as any).map(b => (
            <Link href={"rozbor/" + b.meta.url} key={b.name} prefetch>
              <a>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>
                      {b.name}
                      <span className="f-right text-normal text-gray">
                        {b.type}; {b.genre}
                      </span>
                    </Card.Header>
                    <Card.Meta>
                      {this.getAuthor(b.author)
                        ? this.getAuthor(b.author)!.name
                        : b.author}
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  private getAuthor = (title: string) =>
    meta.authors.find(a => a.wikiTitle === title);

  private filter = ({ name, author, genre, type }: BookType) => {
    const i = this.state.input.toLowerCase();
    return (
      name.toLowerCase().includes(i) ||
      author.toLowerCase().includes(i) ||
      genre.toLowerCase().includes(i) ||
      type.toLowerCase().includes(i)
    );
  };
}

export default Rozbory;
