import { Link } from "@zeit-ui/react";

type MiscProps = {
	name: string;
	url: string;
};

const Misc = ({ name, url }: MiscProps) => {
	return (
		<Link icon underline href={url} target="_blank" rel="noreferrer noopener">
			{name}
		</Link>
	);
};

export default Misc;
