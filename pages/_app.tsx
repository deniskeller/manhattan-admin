import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTransition, animated } from "react-spring";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

import "animate.css/animate.min.css";
import "../styles/globals.scss";
import "@react-page/editor/lib/index.css";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const transition = useTransition(router, {
    key: router.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 },
  });

  return transition((style, item) => {
    return (
      <animated.div style={style}>
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta name="keywords" content="Manhattan" />
            <meta name="author" content="Manhattan" />
            <meta name="description" content="Manhattan" />
            <title>Manhattan</title>
          </Head>

          <Provider store={store}>
            <CacheProvider value={cache}>
              <GlobalStyles />
              <Component {...pageProps} />
            </CacheProvider>
          </Provider>
        </>
      </animated.div>
    );
  });
}

export default MyApp;
