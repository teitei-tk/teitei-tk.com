import {
	Box,
	Center,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

import type { ProfileProps } from "@/types/common";

const Profile = (props: ProfileProps) => {
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
						{/* 意図的にメールアドレスのテキストでTwitterリンクに誘導 */}
						<Link
							href={props.twitterURL}
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
