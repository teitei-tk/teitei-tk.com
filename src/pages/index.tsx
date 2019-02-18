import * as React from "react";
import { graphql } from "gatsby";

import KyashQRCode from "./../images/kyash-qr.svg";

import "uikit/dist/css/uikit.css";

interface IPageProps {
  data: {
    site: {
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
  };
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        repositoryURL
        user {
          name
          bio
          email
          avatarURL
        }
        accounts {
          twitter
          github
          qiita
          speakerDeck
          linkedin
          medium
          note
          hatenaBlog
        }
        donate {
          amazonWishList
          bitcoin
          ethereum
        }
      }
    }
  }
`;

export const Avatar = (props: {
  name: string;
  bio: string;
  email: string;
  avatarURL: string;
  twitter: string;
}) => {
  return (
    <div>
      <div uk-grid className="uk-padding">
        <div className="uk-text-center">
          <h4>Avatar</h4>
          <img src={props.avatarURL} />
        </div>
      </div>

      <div
        uk-grid
        className="uk-flex uk-flex-center uk-child-width-1-3@m uk-text-center uk-padding"
      >
        <div>
          <div>
            <h5>Name</h5>
            <p>{props.name}</p>
          </div>
        </div>
        <div>
          <div>
            <h5>Biography</h5>
            <p>{props.bio}</p>
          </div>
        </div>
        <div>
          <div>
            <h5>Contact</h5>
            <p>
              <a href={props.twitter} target="_blank">
                {props.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SocialMediaAccounts = (props: {
  twitter: string;
  github: string;
  qiita: string;
  speakerDeck: string;
  linkedin: string;
  medium: string;
  note: string;
  hatenaBlog: string;
}) => {
  return (
    <div className="uk-padding uk-text-center">
      <h2>Social Media Accounts</h2>
      <ul className="uk-list uk-list-bulle">
        <li>
          <a href={props.twitter} target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href={props.github} target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href={props.qiita} target="_blank">
            Qiita
          </a>
        </li>
        <li>
          <a href={props.speakerDeck} target="_blank">
            SpeakerDeck
          </a>
        </li>
        <li>
          <a href={props.linkedin} target="_blank">
            Linkedin
          </a>
        </li>
      </ul>

      <h2>Blogs</h2>
      <ul className="uk-list uk-list-bulle">
        <li>
          <a href={props.note} target="_blank">
            note
          </a>
        </li>
        <li>
          <a href={props.medium} target="_blank">
            Medium
          </a>
        </li>
        <li>
          <a href={props.hatenaBlog} target="_blank">
            HatenaBlog
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Donate = (props: {
  bitcoin: string;
  ethereum: string;
  amazonWishList: string;
}) => {
  return (
    <div className="uk-text-center">
      <h2>Donate</h2>
      <div>
        <p>Kyash: </p>
        <KyashQRCode height="150" />
      </div>
      <p>
        Bitcoin: <code>{props.bitcoin}</code>
      </p>
      <p>
        Ethereum: <code>{props.ethereum}</code>
      </p>
      <p>
        <a href={props.amazonWishList} target="_blank">
          AmazonWishList
        </a>
      </p>
    </div>
  );
};

const Page: React.SFC<IPageProps> = props => {
  const {
    name,
    repositoryURL,
    user,
    accounts,
    donate
  } = props.data.site.siteMetadata;

  const avatar = {
    ...user,
    ...{ twitter: accounts.twitter }
  };

  return (
    <>
      <div
        className="uk-padding uk-child-width-expand@s uk-text-center"
        uk-grid
      >
        <h1 className="uk-text-lead uk-text-center">{name}</h1>
      </div>

      <Avatar {...avatar} />
      <SocialMediaAccounts {...accounts} />
      <Donate {...donate} />

      <p className="uk-text-center uk-padding-large">
        Source code:{" "}
        <a href={repositoryURL} target="_blank">
          Github
        </a>
      </p>
    </>
  );
};

export default Page;
