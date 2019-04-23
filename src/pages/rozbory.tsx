import * as React from "react";
import { Input, Card } from "semantic-ui-react";
import { BookType } from "../types/book";
let fs: any;
if (!(process as any).browser) {
  fs = require("fs");
}

interface Props {
  books: BookType[];
}

interface State {
  input: string;
}

class Rozbory extends React.Component<Props, State> {
  private static async getInitialProps() {
    const books: BookType[] = [];
    await fs.readdirSync("./src/pages/rozbor").map((f: string) => {
      const file = require("./rozbor/" + f);
      books.push(file.book);
    });

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
        {this.props.books.filter(this.filter).map(b => (
          <Card key={b.name} header={b.name} meta={b.author} fluid>
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
        ))}
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
