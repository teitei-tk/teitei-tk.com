import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BlogAccounts from "@/components/page/index/BlogAccounts";
import { renderWithChakra } from "@/lib/test-utils";

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
