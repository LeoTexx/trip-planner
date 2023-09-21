import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import light from "./light";

type ThemeName = "light";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (themeName: ThemeName) => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const theme = useMemo(() => {
    return {
      light,
    }[themeName];
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme: setThemeName }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
