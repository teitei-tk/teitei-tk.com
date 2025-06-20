/**
 * ブログアカウント一覧を表示するコンポーネント
 */
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useMemo } from "react";

import ExternalLink from "@/components/common/ExternalLink";
import type { AccountsProps, BlogAccount } from "@/types/common";

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

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/lib/test-utils");

	describe("BlogAccounts component", () => {
		it("renders blog accounts correctly", () => {
			const mockProps = {
				note: "https://note.com/test_note" as const,
				hatenaBlog: "https://hatenablog.com/test_hatenaBlog" as const,
			};

			renderWithChakra(<BlogAccounts {...mockProps} />);

			expect(screen.getByText("Blogs")).toBeInTheDocument();
			expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute(
				"href",
				mockProps.hatenaBlog,
			);
			expect(screen.getByRole("link", { name: "note" })).toHaveAttribute(
				"href",
				mockProps.note,
			);
		});
	});
}
