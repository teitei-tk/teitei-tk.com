import {
	Box,
	Center,
	Grid,
	GridItem,
	HStack,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type Props = {
	name: string;
	bio: string;
	email: string;
	avatarURL: string;
	twitter: string; // FIXME: rename to twitterURL
};

const Profile = (props: Props) => {
	return (
		<Box as="section" my={8}>
			<Center mb={8}>
				<Image
					borderRadius="full"
					boxSize="150px"
					src={props.avatarURL}
					alt="teitei-tkとして活動しているアカウントのアバター画像。タバコをくわえた茶髪の少女の横顔イラスト"
				/>
			</Center>

			<Grid
				templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
				gap={10}
				textAlign="center"
			>
				<GridItem>
					<Stack gap={2} align={"center"}>
						<Heading size="sm">name</Heading>
						<Text mb={2}>@{props.name}</Text>
					</Stack>
				</GridItem>
				<GridItem>
					<Stack gap={2} align={"center"}>
						<Heading size="sm">biography</Heading>
						<Text mb={2}>{props.bio}</Text>
					</Stack>
				</GridItem>
				<GridItem>
					<Stack gap={2} align={"center"}>
						<Heading size="sm">Contact</Heading>
						<Link
							href={props.twitter}
							target="_blank"
							rel="noopener noreferrer"
							variant="underline"
						>
							<HStack align="center">
								<Text>{props.email}</Text>
								<LuExternalLink />
							</HStack>
						</Link>
					</Stack>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default Profile;
