import Accounts, {
	type SNSAccount,
	type BlogAccount,
} from "@/components/page/index/accounts";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithChakra } from "../../../renderer";

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

		const accountsMap: SNSAccount[] = [
			{
				name: "Twitter",
				url: mockProps.twitter,
			},
			{
				name: "GitHub",
				url: mockProps.github,
			},
			{
				name: "Zenn",
				url: mockProps.zenn,
			},
			{
				name: "Qiita",
				url: mockProps.qiita,
			},
			{
				name: "SpeakerDeck",
				url: mockProps.speakerDeck,
			},
		];

		const blogsMap: BlogAccount[] = [
			{
				name: "HatenaBlog",
				url: mockProps.hatenaBlog,
			},
			{
				name: "note",
				url: mockProps.note,
			},
		];

		renderWithChakra(<Accounts {...mockProps} />);

		for (const { name, url } of accountsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}

		for (const { name, url } of blogsMap) {
			expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
		}
	});
});
