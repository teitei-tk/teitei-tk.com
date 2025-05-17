import { Link } from "@chakra-ui/react";

type SNSProps = {
	name: string;
	url: string;
};

const SNS = ({ name, url }: SNSProps) => {
	return (
		<Link href={url} target="_blank" rel="noreferrer noopener">
			{name}
		</Link>
	);
};

export default SNS;
