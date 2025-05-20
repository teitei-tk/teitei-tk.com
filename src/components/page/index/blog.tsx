import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type BlogProps = {
	name: string;
	url: string;
};

const Blog = ({ name, url }: BlogProps) => {
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

export default Blog;
