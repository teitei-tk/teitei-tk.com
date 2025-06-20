/**
 * App Router用のホームページコンポーネント
 */
import {
	Box,
	Grid,
	GridItem,
	Heading,
	Link,
	Separator,
	Text,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

import Layout from "@/components/layout";
import Accounts from "@/components/page/index/accounts";
import Profile from "@/components/page/index/profile";
import { SITE_METADATA } from "@/lib/constants";

export default function HomePage() {
	const { name, user, accounts, repositoryURL } = SITE_METADATA;

	const avatar = {
		...user,
		twitterURL: accounts.twitter,
	};

	return (
		<Layout>
			<Grid templateColumns="repeat(1, 1fr)" gap={2} justifyItems="center">
				<GridItem>
					<Box py={6}>
						<Heading size="3xl">{name}</Heading>
					</Box>
				</GridItem>
				<GridItem>
					<Profile {...avatar} />
				</GridItem>
				<GridItem>
					<Accounts {...accounts} />
				</GridItem>
				<GridItem textAlign={"center"} my={2}>
					<Box className="sourceCode" py={4}>
						<Separator mb={4} />
						<Text fontWeight="bold" mb={2}>
							SourceCode:{" "}
						</Text>
						<Link
							href={repositoryURL}
							target="_blank"
							rel="noopener noreferrer"
							variant="underline"
						>
							GitHub
							<LuExternalLink />
						</Link>
					</Box>
				</GridItem>
			</Grid>
		</Layout>
	);
}

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/lib/test-utils");

	describe("HomePage component", () => {
		it("renders correctly", () => {
			renderWithChakra(<HomePage />);

			// Check if the user name is rendered correctly
			expect(screen.getByText(SITE_METADATA.name)).toBeInTheDocument();

			const accountsMap = [
				{
					name: "Twitter",
					url: SITE_METADATA.accounts.twitter,
				},
				{
					name: "GitHub",
					url: SITE_METADATA.accounts.github,
				},
				{
					name: "Zenn",
					url: SITE_METADATA.accounts.zenn,
				},
				{
					name: "Qiita",
					url: SITE_METADATA.accounts.qiita,
				},
				{
					name: "SpeakerDeck",
					url: SITE_METADATA.accounts.speakerDeck,
				},
			];

			const blogsMap = [
				{
					name: "HatenaBlog",
					url: SITE_METADATA.accounts.hatenaBlog,
				},
				{
					name: "note",
					url: SITE_METADATA.accounts.note,
				},
			];

			for (const { name, url } of accountsMap) {
				if (name === "GitHub") {
					const links = screen.getAllByText(/GitHub/);
					expect(links.length).toBe(2);
					expect(links[0]).toHaveAttribute(
						"href",
						SITE_METADATA.accounts.github,
					);
					expect(links[1]).toHaveAttribute("href", SITE_METADATA.repositoryURL);
					return;
				}

				expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
			}

			for (const { name, url } of blogsMap) {
				expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
			}
		});
	});
}
