import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accounts, {
  SNSAccount,
  BlogAccount,
  MiscAccount,
} from "@/components/page/index/accounts";

describe("Accounts component", () => {
  it("renders correctly", () => {
    const mockProps = {
      twitter: "https://twitter.com/test_twitter",
      github: "https://github.com/test_github",
      qiita: "https://qiita.com/test_qiita",
      speakerDeck: "https://speakerdeck.com/test_speakerdeck",
      linkedin: "https://linkedin.com/test_linkedin",
      medium: "https://medium.com/test_medium",
      note: "https://note.com/test_note",
      hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
      scrapbox: "https://scrapbox.io/test_scrapbox",
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
      {
        name: "Linkedin",
        url: mockProps.linkedin,
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
      {
        name: "Medium",
        url: mockProps.medium,
      },
    ];

    const miscMap: MiscAccount[] = [
      {
        name: "Scrapbox",
        url: mockProps.scrapbox,
      },
    ];

    render(<Accounts {...mockProps} />);

    accountsMap.forEach((account) => {
      expect(screen.getByRole("link", { name: account.name })).toHaveAttribute(
        "href",
        account.url
      );
    });

    blogsMap.forEach((blog) => {
      expect(screen.getByRole("link", { name: blog.name })).toHaveAttribute(
        "href",
        blog.url
      );
    });

    miscMap.forEach((misc) => {
      expect(screen.getByRole("link", { name: misc.name })).toHaveAttribute(
        "href",
        misc.url
      );
    });
  });
});
