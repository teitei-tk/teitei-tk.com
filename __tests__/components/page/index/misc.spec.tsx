import SNS from "@/components/page/index/sns";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithChakra } from "../../../renderer";

describe("SNS component", () => {
	it("renders correctly", () => {
		const mockProps = {
			name: "Scrapbox",
			url: "https://scrapbox.io/teiteitk/",
		};

		renderWithChakra(<SNS {...mockProps} />);

		expect(screen.getByRole("link", { name: "Scrapbox" })).toHaveAttribute(
			"href",
			"https://scrapbox.io/teiteitk/",
		);
	});
});
