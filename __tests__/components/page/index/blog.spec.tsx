import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blog from "@/components/page/index/blog";

describe("SNS component", () => {
  it("renders correctly", () => {
    const mockProps = {
      name: "HatenaBlog",
      url: "http://teitei-tk.hatenablog.com/",
    };

    render(<Blog {...mockProps} />);

    expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute(
      "href",
      "http://teitei-tk.hatenablog.com/"
    );
  });
});
