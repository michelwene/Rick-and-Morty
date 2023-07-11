import { CharactersDeletedProvider } from "@/context/CharactersDeletedContext";
import { ApolloClientProvider } from "@/service/api";
import { GlobalStyle } from "@/styles/global";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloClientProvider>
      <ThemeProvider theme={theme}>
        <CharactersDeletedProvider>
          <Component {...pageProps} />
        </CharactersDeletedProvider>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloClientProvider>
  );
}
