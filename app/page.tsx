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
