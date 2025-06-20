/**
 * 外部リンクを表示するコンポーネント
 */
import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type ExternalLinkProps = {
	name: string;
	url: string;
	className?: string;
};

const ExternalLink = ({ name, url, className }: ExternalLinkProps) => {
	return (
		<Link
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			variant="underline"
			className={className}
		>
			{name}
			<LuExternalLink />
		</Link>
	);
};

export default ExternalLink;

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/lib/test-utils");

	describe("ExternalLink component", () => {
		it("renders correctly with name and url", () => {
			const mockProps = {
				name: "Test Link",
				url: "https://example.com",
			};

			renderWithChakra(<ExternalLink {...mockProps} />);

			expect(screen.getByRole("link", { name: "Test Link" })).toHaveAttribute(
				"href",
				"https://example.com",
			);
		});

		it("renders correctly with className", () => {
			const mockProps = {
				name: "Test Link",
				url: "https://example.com",
				className: "test-class",
			};

			renderWithChakra(<ExternalLink {...mockProps} />);

			const link = screen.getByRole("link", { name: "Test Link" });
			expect(link).toHaveAttribute("href", "https://example.com");
			expect(link).toHaveClass("test-class");
		});

		it("has correct accessibility attributes", () => {
			const mockProps = {
				name: "Test Link",
				url: "https://example.com",
			};

			renderWithChakra(<ExternalLink {...mockProps} />);

			const link = screen.getByRole("link", { name: "Test Link" });
			expect(link).toHaveAttribute("target", "_blank");
			expect(link).toHaveAttribute("rel", "noreferrer noopener");
		});
	});
}
