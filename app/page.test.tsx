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

		const githubLinks = screen.getAllByText(/GitHub/);
		expect(githubLinks).toHaveLength(2);
		expect(githubLinks[0]).toHaveAttribute(
			"href",
			SITE_METADATA.accounts.github,
		);
		expect(githubLinks[1]).toHaveAttribute("href", SITE_METADATA.repositoryURL);

		for (const { name, url } of accountsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}

		for (const { name, url } of blogsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}
	});
});
