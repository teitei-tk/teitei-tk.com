import { NextPage } from "next";
import { Link, Row, Text } from "@zeit-ui/react";

type Props = {
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

const Accounts: NextPage<Props> = (props: Props) => {
  const accountsMap = [
    {
      name: "Twitter",
      url: props.twitter,
    },
    {
      name: "GitHub",
      url: props.github,
    },
    {
      name: "Zenn",
      url: props.zenn,
    },
    {
      name: "Qiita",
      url: props.qiita,
    },
    {
      name: "SpeakerDeck",
      url: props.speakerDeck,
    },
    {
      name: "Linkedin",
      url: props.linkedin,
    },
  ];

  const blogsMap = [
    {
      name: "HatenaBlog",
      url: props.hatenaBlog,
    },
    {
      name: "note",
      url: props.note,
    },
    {
      name: "Medium",
      url: props.medium,
    },
  ];

  const miscMap = [
    {
      name: "Scrapbox",
      url: props.scrapbox,
    },
  ];

  return (
    <section>
      <div className="accounts">
        <Row justify="center">
          <Text h2>Accounts</Text>
        </Row>

        {accountsMap.map(
          (map: { name: string; url: string }, index: number) => {
            return (
              <Row key={index} justify="center">
                <Link
                  icon
                  underline
                  href={map.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {map.name}
                </Link>
              </Row>
            );
          }
        )}
      </div>

      <div className="blogs">
        <Row justify="center">
          <Text h2>Blogs</Text>
        </Row>

        {blogsMap.map((map: { name: string; url: string }, index: number) => {
          return (
            <Row key={index} justify="center">
              <Link
                icon
                underline
                href={map.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {map.name}
              </Link>
            </Row>
          );
        })}
      </div>

      <div className="mis">
        <Row justify="center">
          <Text h2>Misc</Text>
        </Row>

        {miscMap.map((map: { name: string; url: string }, index: number) => {
          return (
            <Row key={index} justify="center">
              <Link
                icon
                underline
                href={map.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {map.name}
              </Link>
            </Row>
          );
        })}
      </div>
    </section>
  );
};

export default Accounts;
