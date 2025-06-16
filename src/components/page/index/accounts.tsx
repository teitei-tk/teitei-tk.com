import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";

import Blog from "@/components/page/index/blog";
import SNS from "@/components/page/index/sns";

type Props = {
	// FIXME: url suffix
	twitter: string;
	github: string;
	qiita: string;
	speakerDeck: string;
	note: string;
	hatenaBlog: string;
	zenn: string;
};

export type SNSAccount = {
	name: "Twitter" | "GitHub" | "Zenn" | "Qiita" | "SpeakerDeck";
	url: string;
};

export type BlogAccount = {
	name: "HatenaBlog" | "note";
	url: string;
};

const Accounts = (props: Props) => {
	const accountsMap: SNSAccount[] = [
		{
			name: "Twitter",
			url: props.twitter,
		},
		{
			name: "GitHub",
			url: props.github,
		},
		{
			name: "Zenn",
			url: props.zenn,
		},
		{
			name: "Qiita",
			url: props.qiita,
		},
		{
			name: "SpeakerDeck",
			url: props.speakerDeck,
		},
	];

	const blogsMap: BlogAccount[] = [
		{
			name: "HatenaBlog",
			url: props.hatenaBlog,
		},
		{
			name: "note",
			url: props.note,
		},
	];

	return (
		<section>
			<Grid templateColumns="repeat(1, 1fr)" gap={1} justifyItems="center">
				<GridItem>
					<Heading size="2xl" textAlign="center" my={4}>
						Accounts
					</Heading>
				</GridItem>
				{accountsMap.map((map: { name: string; url: string }) => {
					return (
						<GridItem key={map.url} textAlign="center">
							<SNS name={map.name} url={map.url} />
						</GridItem>
					);
				})}
				<GridItem>
					<Heading size="2xl" textAlign="center" my={4}>
						Blogs
					</Heading>
				</GridItem>
				{blogsMap.map((map: { name: string; url: string }) => {
					return (
						<GridItem key={map.url} textAlign="center">
							<Blog name={map.name} url={map.url} />
						</GridItem>
					);
				})}
			</Grid>
		</section>
	);
};

export default Accounts;
