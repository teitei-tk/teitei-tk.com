import { AppProps } from "next/app";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_TRACKING_ID } from "@/constants";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>teitei-tk.com</title>
      </Head>
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
