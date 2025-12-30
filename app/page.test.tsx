import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";
import { SITE_METADATA } from "@/lib/constants";
import { renderWithChakra } from "@/lib/test-utils";

describe("HomePage component", () => {
	it("renders correctly", () => {
		renderWithChakra(<HomePage />);

		expect(screen.getByText(SITE_METADATA.name)).toBeInTheDocument();

		const accountsMap = [
			{
				name: "Twitter",
				url: SITE_METADATA.accounts.twitter,
			},
			{
				name: "GitHub",
				url: SITE_METADATA.accounts.github,
			},
			{
				name: "Zenn",
				url: SITE_METADATA.accounts.zenn,
			},
			{
				name: "Qiita",
				url: SITE_METADATA.accounts.qiita,
			},
			{
				name: "SpeakerDeck",
				url: SITE_METADATA.accounts.speakerDeck,
			},
		];

		const blogsMap = [
			{
				name: "HatenaBlog",
				url: SITE_METADATA.accounts.hatenaBlog,
			},
			{
				name: "note",
				url: SITE_METADATA.accounts.note,
			},
		];

		for (const { name, url } of accountsMap) {
			if (name === "GitHub") {
				const links = screen.getAllByText(/GitHub/);
				expect(links.length).toBe(2);
				expect(links[0]).toHaveAttribute("href", SITE_METADATA.accounts.github);
				expect(links[1]).toHaveAttribute("href", SITE_METADATA.repositoryURL);
				continue;
			}

			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}

		for (const { name, url } of blogsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}
	});
});
