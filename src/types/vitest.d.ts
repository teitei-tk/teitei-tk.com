/**
 * Vitest用の型定義
 */
interface ImportMeta {
	readonly vitest?: {
		describe: any;
		it: any;
		expect: any;
	};
}