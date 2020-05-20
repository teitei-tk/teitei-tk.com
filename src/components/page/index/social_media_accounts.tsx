import { NextPage } from "next";

type Props = {
  twitter: string;
  github: string;
  qiita: string;
  speakerDeck: string;
  linkedin: string;
  medium: string;
  note: string;
  hatenaBlog: string;
};

const SocialMediaAccounts: NextPage<Props> = (props: Props) => {
  return (
    <div className="uk-padding uk-text-center">
      <h2>Social Media Accounts</h2>
      <ul className="uk-list uk-list-bulle">
        <li>
          <a href={props.twitter} target="_blank" rel="noreferrer noopener">
            Twitter
          </a>
        </li>
        <li>
          <a href={props.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </li>
        <li>
          <a href={props.qiita} target="_blank" rel="noreferrer noopener">
            Qiita
          </a>
        </li>
        <li>
          <a href={props.speakerDeck} target="_blank" rel="noreferrer noopener">
            SpeakerDeck
          </a>
        </li>
        <li>
          <a href={props.linkedin} target="_blank" rel="noreferrer noopener">
            Linkedin
          </a>
        </li>
      </ul>

      <h2>Blogs</h2>
      <ul className="uk-list uk-list-bulle">
        <li>
          <a href={props.note} target="_blank" rel="noreferrer noopener">
            note
          </a>
        </li>
        <li>
          <a href={props.medium} target="_blank" rel="noreferrer noopener">
            Medium
          </a>
        </li>
        <li>
          <a href={props.hatenaBlog} target="_blank" rel="noreferrer noopener">
            HatenaBlog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaAccounts;
