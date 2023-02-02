import Head from "next/head";

import { SWRConfig } from "swr";
import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { EmotionCache } from "@emotion/react";
import { Inter } from "@next/font/google";
import { SnackbarProvider } from "notistack";

import { wrapper } from "@/store/store";
import theme from "@/config/theme";
import createEmotionCache from "@/config/createEmotionCache";


import type { AppProps } from "next/app";

import "@/styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const inter = Inter({ style: "normal", subsets: ["cyrillic"] });

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  ...pageProps
}: Props) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <SWRConfig value={{ revalidateOnFocus: false }}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
              <main className={inter.className}>
                <Component {...props.pageProps} />
              </main>
            </SnackbarProvider>
          </ThemeProvider>
        </SWRConfig>
      </Provider>
    </>
  );
}
