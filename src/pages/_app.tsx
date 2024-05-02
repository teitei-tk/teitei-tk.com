import { GA_TRACKING_ID } from "@/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import Head from "next/head";

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
