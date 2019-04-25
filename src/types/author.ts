import { FlagNameValues } from "semantic-ui-react";

export interface AuthorType {
  name: string;
  direction: string;
  nationality: FlagNameValues;
  life?: string;
  description?: string;
  more: string[];
  wikiTitle: string;
}
