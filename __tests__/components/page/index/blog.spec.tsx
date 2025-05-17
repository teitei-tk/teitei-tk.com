import Blog from "@/components/page/index/blog";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithChakra } from "../../../renderer";

describe("SNS component", () => {
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
