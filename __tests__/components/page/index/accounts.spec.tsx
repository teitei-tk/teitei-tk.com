import Accounts from "@/components/page/index/accounts";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithChakra } from "../../../renderer";
import { createAccountsMap, createBlogsMap } from "@/utils/mockData";

describe("Accounts component", () => {
	it("renders correctly", () => {
		const mockProps = {
			twitter: "https://twitter.com/test_twitter",
			github: "https://github.com/test_github",
			qiita: "https://qiita.com/test_qiita",
			speakerDeck: "https://speakerdeck.com/test_speakerdeck",
			note: "https://note.com/test_note",
			hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
			zenn: "https://zenn.dev/test_zenn",
		};

		const accountsMap = createAccountsMap({
			twitter: mockProps.twitter,
			github: mockProps.github,
			zenn: mockProps.zenn,
			qiita: mockProps.qiita,
			speakerDeck: mockProps.speakerDeck,
		});

		const blogsMap = createBlogsMap({
			hatenaBlog: mockProps.hatenaBlog,
			note: mockProps.note,
		});

		renderWithChakra(<Accounts {...mockProps} />);

		for (const { name, url } of accountsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}

		for (const { name, url } of blogsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}
	});
});
