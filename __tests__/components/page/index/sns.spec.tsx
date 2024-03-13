import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SNS from "@/components/page/index/sns";

describe("SNS component", () => {
  it("renders correctly", () => {
    const mockProps = {
      name: "Twitter",
      url: "https://twitter.com/test_twitter",
    };

    render(<SNS {...mockProps} />);

    expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
      "href",
      "https://twitter.com/test_twitter"
    );
  });
});
