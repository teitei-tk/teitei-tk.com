import SNS from "@/components/page/index/sns";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithChakra } from "../../../renderer";

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
