import { Avatar, Description, Grid, Link, Spacer, Text } from "@geist-ui/core";

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
				<Avatar alt="avatar" src={props.avatarURL} text={props.name} />
			</div>
			<Spacer />

			<Grid.Container gap={2}>
				<Grid xs={24} md={8}>
					<Description
						className="social"
						title="name"
						content={<Text p>@{props.name}</Text>}
					/>
				</Grid>
				<Grid xs={24} md={8}>
					<Description
						className="social"
						title="biography"
						content={<Text p>{props.bio}</Text>}
					/>
				</Grid>
				<Grid xs={24} md={8}>
					<Description
						className="contact"
						title="Contact"
						content={
							<Link icon underline href={props.twitter} target="_blank">
								<Text p>{props.email}</Text>
							</Link>
						}
					/>
				</Grid>
			</Grid.Container>
			<style>{`
        .profile {
          text-align: center;
        }
      `}</style>
		</section>
	);
};

export default Profile;
