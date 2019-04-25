import { FlagNameValues } from "semantic-ui-react";

export interface AuthorType {
  name: string;
  nationality: FlagNameValues;
  life?: string;
  description?: string;
  wikiTitle: string;
}
