/**
 * テスト用の共通モックデータとユーティリティ関数
 */

export type SNSAccount = {
	name: string;
	url: string;
};

export type BlogAccount = {
	name: string;
	url: string;
};

/**
 * SNSアカウントのマッピングを生成する
 */
export const createAccountsMap = (accounts: {
	twitter: string;
	github: string;
	zenn: string;
	qiita: string;
	speakerDeck: string;
}): SNSAccount[] => [
	{
		name: "Twitter",
		url: accounts.twitter,
	},
	{
		name: "GitHub",
		url: accounts.github,
	},
	{
		name: "Zenn",
		url: accounts.zenn,
	},
	{
		name: "Qiita",
		url: accounts.qiita,
	},
	{
		name: "SpeakerDeck",
		url: accounts.speakerDeck,
	},
];

/**
 * ブログアカウントのマッピングを生成する
 */
export const createBlogsMap = (accounts: {
	hatenaBlog: string;
	note: string;
}): BlogAccount[] => [
	{
		name: "HatenaBlog",
		url: accounts.hatenaBlog,
	},
	{
		name: "note",
		url: accounts.note,
	},
];

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest;

	test("createAccountsMapが正しいSNSアカウント配列を生成する", () => {
		const mockAccounts = {
			twitter: "https://twitter.com/test",
			github: "https://github.com/test",
			zenn: "https://zenn.dev/test",
			qiita: "https://qiita.com/test",
			speakerDeck: "https://speakerdeck.com/test",
		};

		const result = createAccountsMap(mockAccounts);

		expect(result).toHaveLength(5);
		expect(result[0]).toEqual({ name: "Twitter", url: mockAccounts.twitter });
		expect(result[1]).toEqual({ name: "GitHub", url: mockAccounts.github });
	});

	test("createBlogsMapが正しいブログアカウント配列を生成する", () => {
		const mockAccounts = {
			hatenaBlog: "https://test.hatenablog.com",
			note: "https://note.com/test",
		};

		const result = createBlogsMap(mockAccounts);

		expect(result).toHaveLength(2);
		expect(result[0]).toEqual({
			name: "HatenaBlog",
			url: mockAccounts.hatenaBlog,
		});
		expect(result[1]).toEqual({ name: "note", url: mockAccounts.note });
	});
}
