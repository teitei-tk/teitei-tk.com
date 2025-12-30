import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Profile from "@/components/page/index/profile";
import { renderWithChakra } from "@/lib/test-utils";

describe("Profile component", () => {
	it("renders correctly", () => {
		const mockProps = {
			name: "Test Name",
			bio: "Test Bio",
			email: "test@example.com",
			avatarURL: "http://example.com/avatar.jpg",
			twitterURL: "https://twitter.com/test_twitter",
		};

		renderWithChakra(<Profile {...mockProps} />);

		expect(screen.getByText("name")).toBeInTheDocument();
		expect(screen.getByText(`@${mockProps.name}`)).toBeInTheDocument();
		expect(screen.getByText("biography")).toBeInTheDocument();
		expect(screen.getByText(mockProps.bio)).toBeInTheDocument();
		expect(screen.getByText("Contact")).toBeInTheDocument();
		expect(screen.getByText(mockProps.email)).toBeInTheDocument();
		expect(screen.getByRole("link", { name: mockProps.email })).toHaveAttribute(
			"href",
			mockProps.twitterURL,
		);

		expect(
			screen.getByAltText(
				"teitei-tkとして活動しているアカウントのアバター画像。タバコをくわえた茶髪の少女の横顔イラスト",
			),
		).toHaveAttribute("src", "http://example.com/avatar.jpg");
	});
});
