import Blog from "@/components/page/index/blog";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("SNS component", () => {
	it("renders correctly", () => {
		const mockProps = {
			name: "HatenaBlog",
			url: "http://teitei-tk.hatenablog.com/",
		};

		render(<Blog {...mockProps} />);

		expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute(
			"href",
			"http://teitei-tk.hatenablog.com/",
		);
	});
});
