import {
	Box,
	Grid,
	GridItem,
	Heading,
	Link,
	Separator,
	Text,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { LuExternalLink } from "react-icons/lu";

import Layout from "@/components/layout";
import Accounts from "@/components/page/index/accounts";
import Profile from "@/components/page/index/profile";
import { SITE_METADATA, type SiteMetadata } from "@/constants/siteData";

export type IndexPageProps = {
	siteMetadata: SiteMetadata;
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
	const { name, user, accounts, repositoryURL } = props.siteMetadata;

	const avatar = {
		...user,
		twitterURL: accounts.twitter,
	};

	return (
		<>
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
		</>
	);
};

export const getStaticProps: GetStaticProps = async (_) => {
	return {
		props: {
			siteMetadata: SITE_METADATA,
		} as IndexPageProps,
	};
};

export default IndexPage;

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/utils/test-utils");

	describe("IndexPage component", () => {
		it("renders correctly", () => {
			const mockProps: IndexPageProps = {
				siteMetadata: {
					name: "teitei-tk.com",
					repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
					user: {
						name: "teitei-tk",
						bio: "Web Application Developer 得意なことはレガシーコードの改善及び新技術の導入 Ruby/Rails/Go/Python/TypeScript/React/Vue.js",
						avatarURL: "https://avatars3.githubusercontent.com/u/1324680?v=4",
						email: "teitei.tk@gmail.com",
				twitterURL: "https://twitter.com/teitei_tk",
					},
					accounts: {
						twitter: "https://twitter.com/teitei_tk",
						github: "https://github.com/teitei-tk",
						qiita: "https://qiita.com/teitei_tk",
						speakerDeck: "https://speakerdeck.com/teitei",
						note: "https://note.com/teitei_tk",
						hatenaBlog: "http://teitei-tk.hatenablog.com/",
						zenn: "https://zenn.dev/teitei_tk",
					},
				},
			};

			renderWithChakra(<IndexPage {...mockProps} />);

			// Check if the user name is rendered correctly
			expect(screen.getByText(mockProps.siteMetadata.name)).toBeInTheDocument();

			const accountsMap = [
				{
					name: "Twitter",
					url: mockProps.siteMetadata.accounts.twitter,
				},
				{
					name: "GitHub",
					url: mockProps.siteMetadata.accounts.github,
				},
				{
					name: "Zenn",
					url: mockProps.siteMetadata.accounts.zenn,
				},
				{
					name: "Qiita",
					url: mockProps.siteMetadata.accounts.qiita,
				},
				{
					name: "SpeakerDeck",
					url: mockProps.siteMetadata.accounts.speakerDeck,
				},
			];

			const blogsMap = [
				{
					name: "HatenaBlog",
					url: mockProps.siteMetadata.accounts.hatenaBlog,
				},
				{
					name: "note",
					url: mockProps.siteMetadata.accounts.note,
				},
			];

			for (const { name, url } of accountsMap) {
				if (name === "GitHub") {
					const links = screen.getAllByText(/GitHub/);
					expect(links.length).toBe(2);
					expect(links[0]).toHaveAttribute(
						"href",
						mockProps.siteMetadata.accounts.github,
					);
					expect(links[1]).toHaveAttribute(
						"href",
						mockProps.siteMetadata.repositoryURL,
					);
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
