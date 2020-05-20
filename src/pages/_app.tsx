import { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";

import "uikit/dist/css/uikit.css";

import * as gtag from "../lib/gtag";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>teitei-tk.com</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
