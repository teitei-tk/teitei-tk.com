/**
 * レイアウト関連の型定義
 */
import type { ReactNode } from "react";

/**
 * レイアウトコンポーネントのProps
 */
export interface LayoutProps {
	readonly children: ReactNode;
	readonly className?: string;
	readonly id?: string;
}