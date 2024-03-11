import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IndexPage, { IndexPageProps } from "@/pages/index";

describe("IndexPage component", () => {
  it("renders correctly", () => {
    const mockProps: IndexPageProps = {
      siteMetadata: {
        name: "teitei-tk.com",
        repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
        user: {
          name: "teitei-tk",
          bio: "Software Engineer writing Ruby, Python, PHP, JavaScript, Go",
          avatarURL: "https://avatars3.githubusercontent.com/u/1324680?v=4",
          email: "teitei.tk@gmail.com",
        },
        accounts: {
          twitter: "https://twitter.com/teitei_tk",
          github: "https://github.com/teitei-tk",
          qiita: "https://qiita.com/teitei_tk",
          speakerDeck: "https://speakerdeck.com/teitei",
          linkedin: "https://www.linkedin.com/in/teitei-tk/",
          medium: "https://medium.com/@teitei_tk",
          note: "https://note.com/teitei_tk",
          hatenaBlog: "http://teitei-tk.hatenablog.com/",
          scrapbox: "https://scrapbox.io/teiteitk/",
          zenn: "https://zenn.dev/teitei_tk",
        },
      },
    };

    render(<IndexPage {...mockProps} />);

    // Check if the user name is rendered correctly
    expect(screen.getByText(mockProps.siteMetadata.name)).toBeInTheDocument();
  });
});
