import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type SNSProps = {
	name: string;
	url: string;
};

const SNS = ({ name, url }: SNSProps) => {
	return (
		<Link
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			variant="underline"
		>
			{name}
			<LuExternalLink />
		</Link>
	);
};

export default SNS;
