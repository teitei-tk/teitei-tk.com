import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ExternalLink from "@/components/common/ExternalLink";
import { renderWithChakra } from "@/lib/test-utils";

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
