/**
 * SNSアカウント一覧を表示するコンポーネント
 */
import { GridItem, Heading } from "@chakra-ui/react";
import { useMemo } from "react";

import ExternalLink from "@/components/common/ExternalLink";
import type { AccountsProps, SNSAccount } from "@/types/common";

type SNSAccountsProps = Pick<
	AccountsProps,
	"twitter" | "github" | "qiita" | "speakerDeck" | "zenn"
>;

const SNSAccounts = (props: SNSAccountsProps) => {
	const accountsMap: SNSAccount[] = useMemo(
		() => [
			{
				name: "Twitter",
				url: props.twitter,
			},
			{
				name: "GitHub",
				url: props.github,
			},
			{
				name: "Zenn",
				url: props.zenn,
			},
			{
				name: "Qiita",
				url: props.qiita,
			},
			{
				name: "SpeakerDeck",
				url: props.speakerDeck,
			},
		],
		[props.twitter, props.github, props.zenn, props.qiita, props.speakerDeck],
	);

	return (
		<>
			<GridItem>
				<Heading size="2xl" textAlign="center" my={4}>
					Accounts
				</Heading>
			</GridItem>
			{accountsMap.map((account) => (
				<GridItem key={account.url} textAlign="center">
					<ExternalLink name={account.name} url={account.url} />
				</GridItem>
			))}
		</>
	);
};

export default SNSAccounts;

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/lib/test-utils");

	describe("SNSAccounts component", () => {
		it("renders SNS accounts correctly", () => {
			const mockProps = {
				twitter: "https://twitter.com/test_twitter" as const,
				github: "https://github.com/test_github" as const,
				qiita: "https://qiita.com/test_qiita" as const,
				speakerDeck: "https://speakerdeck.com/test_speakerdeck" as const,
				zenn: "https://zenn.dev/test_zenn" as const,
			};

			renderWithChakra(<SNSAccounts {...mockProps} />);

			expect(screen.getByText("Accounts")).toBeInTheDocument();
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
		});
	});
}
