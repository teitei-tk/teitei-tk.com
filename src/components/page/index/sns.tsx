/**
 * SNSリンクを表示するコンポーネント
 */
import ExternalLink from "@/components/common/ExternalLink";

type SNSProps = {
	name: string;
	url: string;
};

const SNS = ({ name, url }: SNSProps) => {
	return <ExternalLink name={name} url={url} />;
};

export default SNS;
