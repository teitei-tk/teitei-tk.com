/**
 * 共通型定義
 */

/**
 * URL文字列型（バリデーション用）
 */
export type URL = string;

/**
 * SNSプラットフォーム名
 */
export type SNSPlatform =
	| "Twitter"
	| "GitHub"
	| "Zenn"
	| "Qiita"
	| "SpeakerDeck";

/**
 * ブログプラットフォーム名
 */
export type BlogPlatform = "HatenaBlog" | "note";

/**
 * SNSアカウント情報
 */
export interface SNSAccount {
	readonly name: SNSPlatform;
	readonly url: URL;
}

/**
 * ブログアカウント情報
 */
export interface BlogAccount {
	readonly name: BlogPlatform;
	readonly url: URL;
}

/**
 * アカウント情報のプロパティ
 */
export interface AccountsProps {
	readonly twitter: URL;
	readonly github: URL;
	readonly qiita: URL;
	readonly speakerDeck: URL;
	readonly note: URL;
	readonly hatenaBlog: URL;
	readonly zenn: URL;
}

/**
 * プロフィール情報のプロパティ
 */
export interface ProfileProps {
	readonly name: string;
	readonly bio: string;
	readonly email: string;
	readonly avatarURL: URL;
	readonly twitterURL: URL;
}
