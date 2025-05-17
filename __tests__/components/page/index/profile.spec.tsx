import Profile from "@/components/page/index/profile";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithChakra } from "../../../renderer";

describe("Profile component", () => {
	it("renders correctly", () => {
		const mockProps = {
			name: "Test Name",
			bio: "Test Bio",
			email: "test@example.com",
			avatarURL: "http://example.com/avatar.jpg",
			twitter: "https://twitter.com/test_twitter",
		};

		renderWithChakra(<Profile {...mockProps} />);

		expect(screen.getByText("name: @Test Name")).toBeInTheDocument();
		expect(screen.getByText("biography: Test Bio")).toBeInTheDocument();
		expect(screen.getByText("Contact: test@example.com")).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "Contact: test@example.com" }),
		).toHaveAttribute("href", "https://twitter.com/test_twitter");

		expect(
			screen.getByAltText(
				"teitei-tkとして活動しているアカウントのアバター画像。タバコをくわえた茶髪の少女の横顔イラスト",
			),
		).toHaveAttribute("src", "http://example.com/avatar.jpg");
	});
});
