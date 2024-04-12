import { Link } from "@zeit-ui/react";

type BlogProps = {
	name: string;
	url: string;
};

const Blog = ({ name, url }: BlogProps) => {
	return (
		<Link icon underline href={url} target="_blank" rel="noreferrer noopener">
			{name}
		</Link>
	);
};

export default Blog;
