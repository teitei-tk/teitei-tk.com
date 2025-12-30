import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Accounts from "@/components/page/index/accounts";
import { renderWithChakra } from "@/lib/test-utils";
import type { AccountsProps } from "@/types/common";

describe("Accounts component", () => {
	it("renders SNS and blog accounts correctly", () => {
		const mockProps: AccountsProps = {
			twitter: "https://twitter.com/test_twitter",
			github: "https://github.com/test_github",
			qiita: "https://qiita.com/test_qiita",
			speakerDeck: "https://speakerdeck.com/test_speakerdeck",
			note: "https://note.com/test_note",
			hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
			zenn: "https://zenn.dev/test_zenn",
		};

		renderWithChakra(<Accounts {...mockProps} />);

		expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
			"href",
			mockProps.twitter,
		);
		expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
			"href",
			mockProps.github,
		);
		expect(screen.getByRole("link", { name: "Zenn" })).toHaveAttribute(
			"href",
			mockProps.zenn,
		);
		expect(screen.getByRole("link", { name: "Qiita" })).toHaveAttribute(
			"href",
			mockProps.qiita,
		);
		expect(screen.getByRole("link", { name: "SpeakerDeck" })).toHaveAttribute(
			"href",
			mockProps.speakerDeck,
		);

		expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute(
			"href",
			mockProps.hatenaBlog,
		);
		expect(screen.getByRole("link", { name: "note" })).toHaveAttribute(
			"href",
			mockProps.note,
		);
	});

	it("renders section headings", () => {
		const mockProps: AccountsProps = {
			twitter: "https://twitter.com/test_twitter",
			github: "https://github.com/test_github",
			qiita: "https://qiita.com/test_qiita",
			speakerDeck: "https://speakerdeck.com/test_speakerdeck",
			note: "https://note.com/test_note",
			hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
			zenn: "https://zenn.dev/test_zenn",
		};

		renderWithChakra(<Accounts {...mockProps} />);

		expect(screen.getByText("Accounts")).toBeInTheDocument();
		expect(screen.getByText("Blogs")).toBeInTheDocument();
	});
});
