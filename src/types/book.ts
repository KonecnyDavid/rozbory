export interface BookType {
  name: string;
  author: string;
  image?: string;

  released: number;
  type: "Lyrika" | "Epika" | "Drama" | "Lyricko-epický";
  genre: string;
  theme: string;
  motives: string;
  timespace: string;
  composition: "Chronologická" | "Retrospektivní" | "Rámcová";
  compositionNote?: string;

  narrator: "Ich" | "Er" | "Lyrický subjekt" | "Chybí";
  narratorNote?: string;
  tellingMeans?: string;
  speechType?: string;
  verse?: string;

  lexMeans: string;
  figures: string;

  meta: {
    file: string;
    url: string;
    updated: string;
    created: string;
  };
}
