/**
 * ブログリンクを表示するコンポーネント
 */
import ExternalLink from "@/components/common/ExternalLink";

type BlogProps = {
	name: string;
	url: string;
};

const Blog = ({ name, url }: BlogProps) => {
	return <ExternalLink name={name} url={url} />;
};

export default Blog;
