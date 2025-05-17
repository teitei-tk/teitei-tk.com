import { Avatar, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";

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
				<Image
					borderRadius="full"
					boxSize="150px"
					src={props.avatarURL}
					alt="teitei-tkとして活動しているアカウントのアバター画像。タバコをくわえた茶髪の少女の横顔イラスト"
				/>
			</div>

			<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={2}>
				<GridItem>
					<Text>name: @{props.name}</Text>
				</GridItem>
				<GridItem>
					<Text>biography: {props.bio}</Text>
				</GridItem>
				<GridItem>
					<Link href={props.twitter} target="_blank" rel="noopener noreferrer">
						<Text>Contact: {props.email}</Text>
					</Link>
				</GridItem>
			</Grid>
			<style>{`
        .profile {
          text-align: center;
        }
      `}</style>
		</section>
	);
};

export default Profile;
