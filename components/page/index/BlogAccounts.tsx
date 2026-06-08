/**
 * ブログアカウント一覧を表示するコンポーネント
 */
import { GridItem, Heading } from "@chakra-ui/react";
import { useMemo } from "react";

import type { AccountsProps, BlogAccount } from "@/types/common";

import ExternalLink from "@/components/common/ExternalLink";

type BlogAccountsProps = Pick<AccountsProps, "note" | "hatenaBlog">;

const BlogAccounts = (props: BlogAccountsProps) => {
	const blogsMap: BlogAccount[] = useMemo(
		() => [
			{
				name: "HatenaBlog",
				url: props.hatenaBlog,
			},
			{
				name: "note",
				url: props.note,
			},
		],
		[props.hatenaBlog, props.note],
	);

	return (
		<>
			<GridItem>
				<Heading size="2xl" textAlign="center" my={4}>
					Blogs
				</Heading>
			</GridItem>
			{blogsMap.map((blog) => (
				<GridItem key={blog.url} textAlign="center">
					<ExternalLink name={blog.name} url={blog.url} />
				</GridItem>
			))}
		</>
	);
};

export default BlogAccounts;
