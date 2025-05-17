import { CssBaseline } from "@geist-ui/core";
import Document, {
	Head,
	Main,
	NextScript,
	Html,
	type DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = CssBaseline.flush();

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styles}
				</>
			),
		};
	}

	render() {
		return (
			<Html lang="ja">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="static/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="static/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="static/favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="static/favicon/site.webmanifest" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
