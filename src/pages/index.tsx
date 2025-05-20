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

export type IndexPageProps = {
	siteMetadata: {
		name: string;
		repositoryURL: string;
		user: {
			name: string;
			bio: string;
			email: string;
			avatarURL: string;
		};
		accounts: {
			twitter: string;
			github: string;
			qiita: string;
			speakerDeck: string;
			linkedin: string;
			medium: string;
			note: string;
			hatenaBlog: string;
			zenn: string;
		};
	};
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
	const { name, user, accounts, repositoryURL } = props.siteMetadata;

	const avatar = {
		...user,
		...{ twitter: accounts.twitter },
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
	const staticData = {
		siteMetadata: {
			name: "teitei-tk.com",
			repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
			user: {
				name: "teitei-tk",
				bio: "Software Engineer writing Ruby, Python, JavaScript, Go",
				avatarURL: "https://avatars3.githubusercontent.com/u/1324680?v=4",
				email: "teitei.tk@gmail.com",
				twitterURL: "https://twitter.com/teitei_tk",
			},
			accounts: {
				twitter: "https://twitter.com/teitei_tk",
				github: "https://github.com/teitei-tk",
				qiita: "https://qiita.com/teitei_tk",
				speakerDeck: "https://speakerdeck.com/teitei",
				linkedin: "https://www.linkedin.com/in/teitei-tk/",
				medium: "https://medium.com/@teitei_tk",
				note: "https://note.com/teitei_tk",
				hatenaBlog: "http://teitei-tk.hatenablog.com/",
				zenn: "https://zenn.dev/teitei_tk",
			},
		},
	};

	return {
		props: staticData as IndexPageProps,
	};
};

export default IndexPage;
