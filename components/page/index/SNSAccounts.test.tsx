import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SNSAccounts from "@/components/page/index/SNSAccounts";
import { renderWithChakra } from "@/lib/test-utils";

describe("SNSAccounts component", () => {
	it("renders SNS accounts correctly", () => {
		const mockProps = {
			twitter: "https://twitter.com/test_twitter" as const,
			github: "https://github.com/test_github" as const,
			qiita: "https://qiita.com/test_qiita" as const,
			speakerDeck: "https://speakerdeck.com/test_speakerdeck" as const,
			zenn: "https://zenn.dev/test_zenn" as const,
		};

		renderWithChakra(<SNSAccounts {...mockProps} />);

		expect(screen.getByText("Accounts")).toBeInTheDocument();
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
	});
});
