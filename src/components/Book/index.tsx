import * as React from "react";
import { Table, Divider } from "semantic-ui-react";
import { BookType } from "types/book";

interface Props {
  book: BookType;
}

const Book: React.FC<Props> = ({
  book: {
    type,
    genre,
    theme,
    motives,
    timespace,
    narrator,
    narratorNote,
    composition,
    compositionNote,
    tellingMeans,
    speechType,
    verse,
    lexMeans,
    figures
  }
}) => {
  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.Cell width="2">
            <strong>1. část</strong>
          </Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell singleLine>Druh:</Table.Cell>
          <Table.Cell>{type}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Žánr:</Table.Cell>
          <Table.Cell>{genre}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Téma a motiv:</Table.Cell>
          <Table.Cell>
            {theme} <br /> {motives}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Časoprostor:</Table.Cell>
          <Table.Cell>{timespace}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Kompoziční výstavba:</Table.Cell>
          <Table.Cell>
            <strong>{composition}</strong>
            <br /> {compositionNote}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Header>
        <Table.Row>
          <Table.Cell singleLine width="2">
            <strong>2. část</strong>
          </Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell singleLine>Vypravěč / lyrický subjekt:</Table.Cell>
          <Table.Cell>
            <strong>{narrator}</strong>
            <br /> {narratorNote}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Vyprávěcí způsoby:</Table.Cell>
          <Table.Cell>{tellingMeans}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Typy promluv:</Table.Cell>
          <Table.Cell>{speechType}</Table.Cell>
        </Table.Row>
        {verse && (
          <Table.Row>
            <Table.Cell singleLine>Veršová výstavba:</Table.Cell>
            <Table.Cell>{verse}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
      <Table.Header>
        <Table.Row>
          <Table.Cell width="2">
            <strong>3. část</strong>
          </Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell singleLine>Jazykové prostředky:</Table.Cell>
          <Table.Cell>{lexMeans}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine>Tropy a figury:</Table.Cell>
          <Table.Cell>{figures}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default Book;
