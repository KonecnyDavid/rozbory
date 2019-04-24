export interface BookType {
  name: string;
  author: string;

  released: number;
  type: "Lyrika" | "Epika" | "Drama" | "Lyricko-epický";
  genre: string;
  theme: string;
  motives: string;
  timespace: string;
  narrator: "Ich" | "Er";
  narratorNote?: string;
  composition: "Chronologická" | "Retrospektivní";
  compositionNote?: string;

  meta: {
    file: string;
    url: string;
    updated: string;
    created: string;
  };
}
