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
