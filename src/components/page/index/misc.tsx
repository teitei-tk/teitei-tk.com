import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type MiscProps = {
	name: string;
	url: string;
};

const Misc = ({ name, url }: MiscProps) => {
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

export default Misc;
