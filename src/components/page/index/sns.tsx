import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type SNSProps = {
	name: string;
	url: string;
};

const SNS = ({ name, url }: SNSProps) => {
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

export default SNS;

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/utils/test-utils");

	describe("SNS component", () => {
		it("renders correctly", () => {
			const mockProps = {
				name: "Twitter",
				url: "https://twitter.com/test_twitter",
			};

			renderWithChakra(<SNS {...mockProps} />);

			expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
				"href",
				"https://twitter.com/test_twitter",
			);
		});
	});
}
