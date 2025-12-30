/**
 * 外部リンクを表示するコンポーネント
 */
import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type ExternalLinkProps = {
	name: string;
	url: string;
	className?: string;
};

const ExternalLink = ({ name, url, className }: ExternalLinkProps) => {
	return (
		<Link
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			variant="underline"
			className={className}
		>
			{name}
			<LuExternalLink />
		</Link>
	);
};

export default ExternalLink;
