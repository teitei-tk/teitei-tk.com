/**
 * アカウント情報を表示するコンポーネント（SNSとブログの統合）
 */
import { Grid } from "@chakra-ui/react";

import BlogAccounts from "@/components/page/index/BlogAccounts";
import SNSAccounts from "@/components/page/index/SNSAccounts";
import type { AccountsProps } from "@/types/common";

const Accounts = (props: AccountsProps) => {
	return (
		<section>
			<Grid templateColumns="repeat(1, 1fr)" gap={1} justifyItems="center">
				<SNSAccounts
					twitter={props.twitter}
					github={props.github}
					qiita={props.qiita}
					speakerDeck={props.speakerDeck}
					zenn={props.zenn}
				/>
				<BlogAccounts note={props.note} hatenaBlog={props.hatenaBlog} />
			</Grid>
		</section>
	);
};

export default Accounts;

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/lib/test-utils");

	describe("Accounts component", () => {
		it("renders SNS and blog accounts correctly", () => {
			const mockProps: AccountsProps = {
				twitter: "https://twitter.com/test_twitter",
				github: "https://github.com/test_github",
				qiita: "https://qiita.com/test_qiita",
				speakerDeck: "https://speakerdeck.com/test_speakerdeck",
				note: "https://note.com/test_note",
				hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
				zenn: "https://zenn.dev/test_zenn",
			};

			renderWithChakra(<Accounts {...mockProps} />);

			// SNS accounts
			expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
				"href",
				mockProps.twitter,
			);
			expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
				"href",
				mockProps.github,
			);
			expect(screen.getByRole("link", { name: "Zenn" })).toHaveAttribute(
				"href",
				mockProps.zenn,
			);
			expect(screen.getByRole("link", { name: "Qiita" })).toHaveAttribute(
				"href",
				mockProps.qiita,
			);
			expect(screen.getByRole("link", { name: "SpeakerDeck" })).toHaveAttribute(
				"href",
				mockProps.speakerDeck,
			);

			// Blog accounts
			expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute(
				"href",
				mockProps.hatenaBlog,
			);
			expect(screen.getByRole("link", { name: "note" })).toHaveAttribute(
				"href",
				mockProps.note,
			);
		});

		it("renders section headings", () => {
			const mockProps: AccountsProps = {
				twitter: "https://twitter.com/test_twitter",
				github: "https://github.com/test_github",
				qiita: "https://qiita.com/test_qiita",
				speakerDeck: "https://speakerdeck.com/test_speakerdeck",
				note: "https://note.com/test_note",
				hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
				zenn: "https://zenn.dev/test_zenn",
			};

			renderWithChakra(<Accounts {...mockProps} />);

			expect(screen.getByText("Accounts")).toBeInTheDocument();
			expect(screen.getByText("Blogs")).toBeInTheDocument();
		});
	});
}
