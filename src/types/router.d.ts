export interface Router {
  isReady: boolean;
  query: {
    cities?: string | string[];
    passengers?: string;
    date?: string;
  };
  pathname: string;
  push: (obj: any) => void;
}
