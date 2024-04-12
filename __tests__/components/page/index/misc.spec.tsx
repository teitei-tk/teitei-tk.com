import SNS from "@/components/page/index/sns";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("SNS component", () => {
	it("renders correctly", () => {
		const mockProps = {
			name: "Scrapbox",
			url: "https://scrapbox.io/teiteitk/",
		};

		render(<SNS {...mockProps} />);

		expect(screen.getByRole("link", { name: "Scrapbox" })).toHaveAttribute(
			"href",
			"https://scrapbox.io/teiteitk/",
		);
	});
});
