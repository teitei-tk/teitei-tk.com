import { Link } from "@chakra-ui/react";

type MiscProps = {
	name: string;
	url: string;
};

const Misc = ({ name, url }: MiscProps) => {
	return (
		<Link href={url} target="_blank" rel="noreferrer noopener">
			{name}
		</Link>
	);
};

export default Misc;
