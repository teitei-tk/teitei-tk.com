import { NextPage } from "next";

type AvatarProps = {
  name: string;
  bio: string;
  email: string;
  avatarURL: string;
  twitter: string;
};

const Avatar: NextPage<AvatarProps> = (props: AvatarProps) => {
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
              <a href={props.twitter} target="_blank" rel="noreferrer noopener">
                {props.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
