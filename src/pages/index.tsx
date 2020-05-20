import { NextPage } from "next";

import Avatar from "components/page/index/avatar";
import SocialMediaAccounts from "components/page/index/social_media_accounts";
import Donate from "components/page/index/donate";

type IndexPageProps = {
  siteMetadata: {
    name: string;
    repositoryURL: string;
    user: {
      name: string;
      bio: string;
      email: string;
      avatarURL: string;
    };
    accounts: {
      twitter: string;
      github: string;
      qiita: string;
      speakerDeck: string;
      linkedin: string;
      medium: string;
      note: string;
      hatenaBlog: string;
    };
    donate: {
      amazonWishList: string;
      bitcoin: string;
      ethereum: string;
    };
  };
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { name, user, accounts, donate, repositoryURL } = props.siteMetadata;

  const avatar = {
    ...user,
    ...{ twitter: accounts.twitter },
  };

  return (
    <>
      <div
        className="uk-padding uk-child-width-expand@s uk-text-center"
        uk-grid="true"
      >
        <h1 className="uk-text-lead uk-text-center">{name}</h1>
      </div>

      <Avatar {...avatar} />
      <SocialMediaAccounts {...accounts} />
      <Donate {...donate} />

      <p className="uk-text-center uk-padding-large">
        SourceCode:{" "}
        <a href={repositoryURL} target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
      </p>
    </>
  );
};

IndexPage.getInitialProps = async (): Promise<IndexPageProps> => {
  const staticData = {
    siteMetadata: {
      name: "teitei-tk.com",
      repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
      user: {
        name: "teitei-tk",
        bio: "Software Enginner",
        avatarURL: "https://avatars3.githubusercontent.com/u/1324680?v=4",
        email: "teitei.tk@gmail.com",
        twitterURL: "https://twitter.com/teitei_tk",
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
      },
      donate: {
        amazonWishList:
          "https://www.amazon.co.jp/gp/registry/wishlist/1KY1Q9M8EAIA5/ref=nav_wishlist_lists_1",
        bitcoin: "35Hcpn2RxXUftVuPppTWGYaNx3EhHfsWab",
        ethereum: "0x1BE2b1A385DD21025BCD9A4d6264b3d9093C78FE",
      },
    },
  };

  return staticData;
};

export default IndexPage;
