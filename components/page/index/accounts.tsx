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
