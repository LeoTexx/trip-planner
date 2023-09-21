export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    font: string;
    card: string;
    background: string;
    backgroundInput: string;
    fontInput: string;
    muted: string;
    danger: string;
    button: string;
    buttonFont: string;
  };
  sizing: {
    borderRadius: number;
  };
  backgroundOpacity: number;
}
