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
	twitterURL: string;
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

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/utils/test-utils");

	describe("Profile component", () => {
		it("renders correctly", () => {
			const mockProps = {
				name: "Test Name",
				bio: "Test Bio",
				email: "test@example.com",
				avatarURL: "http://example.com/avatar.jpg",
				twitterURL: "https://twitter.com/test_twitter",
			};

			renderWithChakra(<Profile {...mockProps} />);

			expect(screen.getByText("name")).toBeInTheDocument();
			expect(screen.getByText(`@${mockProps.name}`)).toBeInTheDocument();
			expect(screen.getByText("biography")).toBeInTheDocument();
			expect(screen.getByText(mockProps.bio)).toBeInTheDocument();
			expect(screen.getByText("Contact")).toBeInTheDocument();
			expect(screen.getByText(mockProps.email)).toBeInTheDocument();
			expect(screen.getByRole("link", { name: mockProps.email })).toHaveAttribute(
				"href",
				mockProps.twitterURL,
			);

			expect(
				screen.getByAltText(
					"teitei-tkとして活動しているアカウントのアバター画像。タバコをくわえた茶髪の少女の横顔イラスト",
				),
			).toHaveAttribute("src", "http://example.com/avatar.jpg");
		});
	});
}
