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

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/utils/test-utils");

	describe("Blog component", () => {
		it("renders correctly", () => {
			const mockProps = {
				name: "HatenaBlog",
				url: "http://teitei-tk.hatenablog.com/",
			};

			renderWithChakra(<Blog {...mockProps} />);

			expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute(
				"href",
				"http://teitei-tk.hatenablog.com/",
			);
		});
	});
}
