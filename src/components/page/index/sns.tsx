import { Link } from "@geist-ui/core";

type SNSProps = {
	name: string;
	url: string;
};

const SNS = ({ name, url }: SNSProps) => {
	return (
		<Link icon underline href={url} target="_blank" rel="noreferrer noopener">
			{name}
		</Link>
	);
};

export default SNS;
