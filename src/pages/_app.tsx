import { GA_TRACKING_ID } from "@/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>teitei-tk.com</title>
			</Head>
			<GoogleAnalytics gaId={GA_TRACKING_ID} />

                        <ChakraProvider theme={defaultSystem}>
                                <Component {...pageProps} />
                        </ChakraProvider>
		</>
	);
};

export default App;
