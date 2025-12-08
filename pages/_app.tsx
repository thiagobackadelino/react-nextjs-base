import { AppProps } from 'next/app';
import GlobalStyle from "@src/theme/globalStyle";
import ThemeProvider from '@src/theme/themeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}