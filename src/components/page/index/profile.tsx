import {
	Avatar,
	Col,
	Description,
	Link,
	Row,
	Spacer,
	Text,
} from "@zeit-ui/react";

type Props = {
	name: string;
	bio: string;
	email: string;
	avatarURL: string;
	twitter: string; // FIXME: rename to twitterURL
};

const Profile = (props: Props) => {
	return (
		<section>
			<div className="profile">
				<Avatar
					alt="avatar"
					src={props.avatarURL}
					text={props.name}
					size={200}
				/>
			</div>
			<Spacer y={1} />

			<Row gap={0.7}>
				<Col>
					<Description
						className="social"
						title="name"
						content={<Text p>@{props.name}</Text>}
					/>
				</Col>
				<Col>
					<Description
						className="social"
						title="biography"
						content={<Text p>{props.bio}</Text>}
					/>
				</Col>
				<Col>
					<Description
						className="contact"
						title="Contact"
						content={
							<Link icon underline href={props.twitter} target="_blank">
								<Text p>{props.email}</Text>
							</Link>
						}
					/>
				</Col>
			</Row>
			<style>{`
        .profile {
          text-align: center;
        }
      `}</style>
		</section>
	);
};

export default Profile;
