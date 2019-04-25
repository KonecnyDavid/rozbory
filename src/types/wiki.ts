export interface WikiSummary {
  title: string;
  displaytitle: string;
  extract: string;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  originalimage: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  description: string;
}