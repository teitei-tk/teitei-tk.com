/**
 * サイトの静的データ定義
 */

export const SITE_METADATA = {
	name: "teitei-tk.com",
	repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
	user: {
		name: "teitei-tk",
		bio: "Web Application Developer 得意なことはレガシーコードの改善及び新技術の導入 Ruby/Rails/Go/Python/TypeScript/React/Vue.js",
		avatarURL: "https://avatars3.githubusercontent.com/u/1324680?v=4",
		email: "teitei.tk@gmail.com",
		twitterURL: "https://twitter.com/teitei_tk",
	},
	accounts: {
		twitter: "https://twitter.com/teitei_tk",
		github: "https://github.com/teitei-tk",
		qiita: "https://qiita.com/teitei_tk",
		speakerDeck: "https://speakerdeck.com/teitei",
		note: "https://note.com/teitei_tk",
		hatenaBlog: "http://teitei-tk.hatenablog.com/",
		zenn: "https://zenn.dev/teitei_tk",
	},
} as const;

export type SiteMetadata = typeof SITE_METADATA;