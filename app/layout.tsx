/**
 * App Router用のルートレイアウトコンポーネント
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
	title: "teitei-tk Portfolio",
	description: "teitei-tkの個人ポートフォリオサイト",
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="ja">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
