import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import ThemeProvider from "providers/ThemeProvider";
import { GlobalStyles } from "styles/global";
import { Background } from "styles/shared";

const font = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <main className={font.className}>
        <DefaultSeo
          title={"Travel Distance Calculator - Leonardo Teixeira"}
          description={
            "This project is a travel distance calculator, where users can define multiple destinations and calculate the route distance"
          }
          additionalMetaTags={[
            {
              name: `viewport`,
              content: `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no`,
            },
          ]}
        />
        <Background>
          <Component {...pageProps} />
        </Background>
      </main>
    </ThemeProvider>
  );
}
