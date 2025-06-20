/**
 * バリデーション用ユーティリティ関数
 */

/**
 * 有効なURLかどうかをチェックする
 */
export const isValidUrl = (url: string): boolean => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

/**
 * HTTPSまたはHTTPで始まるURLかどうかをチェックする
 */
export const isValidHttpUrl = (url: string): boolean => {
	return isValidUrl(url) && /^https?:\/\//.test(url);
};

/**
 * メールアドレスの形式をチェックする
 */
export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};
