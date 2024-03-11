import type { NextPage, GetStaticProps } from "next";

import { Divider, Link, Text, Grid, Row } from "@zeit-ui/react";

import Layout from "@/components/layout";
import Profile from "@/components/page/index/profile";
import Accounts from "@/components/page/index/accounts";

export type IndexPageProps = {
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
      scrapbox: string;
      zenn: string;
    };
  };
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { name, user, accounts, repositoryURL } = props.siteMetadata;

  const avatar = {
    ...user,
    ...{ twitter: accounts.twitter },
  };

  return (
    <>
      <Layout>
        <Grid.Container justify="center">
          <Grid xs={24}>
            <Row justify="center">
              <div className="title">
                <Text h1>{name}</Text>
              </div>
            </Row>
          </Grid>
          <Grid>
            <Profile {...avatar} />
          </Grid>
          <Grid xs={24}>
            <Accounts {...accounts} />
          </Grid>
          <Grid xs={24}>
            <Row justify="center">
              <div className="sourceCode">
                {/* FIXME: Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>. */}
                <Text p>
                  <Divider />
                  <Text b>SourceCode: </Text>
                  <Link
                    icon
                    underline
                    href={repositoryURL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </Link>
                </Text>
              </div>
            </Row>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_) => {
  const staticData = {
    siteMetadata: {
      name: "teitei-tk.com",
      repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
      user: {
        name: "teitei-tk",
        bio: "Software Engineer writing Ruby, Python, PHP, JavaScript, Go",
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
        scrapbox: "https://scrapbox.io/teiteitk/",
        zenn: "https://zenn.dev/teitei_tk",
      },
    },
  };

  return {
    props: staticData as IndexPageProps,
  };
};

export default IndexPage;
