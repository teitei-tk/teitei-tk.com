import { Row, Text } from "@zeit-ui/react";

import Blog from "@/components/page/index/blog";
import Misc from "@/components/page/index/misc";
import SNS from "@/components/page/index/sns";

type Props = {
	// FIXME: url suffix
	twitter: string;
	github: string;
	qiita: string;
	speakerDeck: string;
	linkedin: string; // TODO: remove
	medium: string; // TODO: remove
	note: string;
	hatenaBlog: string;
	scrapbox: string;
	zenn: string;
};

export type SNSAccount = {
	name: "Twitter" | "GitHub" | "Zenn" | "Qiita" | "SpeakerDeck" | "Linkedin";
	url: string;
};

export type BlogAccount = {
	name: "HatenaBlog" | "note" | "Medium";
	url: string;
};

export type MiscAccount = {
	name: "Scrapbox";
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
		{
			name: "Linkedin",
			url: props.linkedin,
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
		{
			name: "Medium",
			url: props.medium,
		},
	];

	const miscMap: MiscAccount[] = [
		{
			name: "Scrapbox",
			url: props.scrapbox,
		},
	];

	return (
		<section>
			<div className="accounts">
				<Row justify="center">
					<Text h2>Accounts</Text>
				</Row>

				{accountsMap.map((map: { name: string; url: string }) => {
					return (
						<Row key={map.url} justify="center">
							<SNS name={map.name} url={map.url} />
						</Row>
					);
				})}
			</div>

			<div className="blogs">
				<Row justify="center">
					<Text h2>Blogs</Text>
				</Row>

				{blogsMap.map((map: { name: string; url: string }) => {
					return (
						<Row key={map.url} justify="center">
							<Blog name={map.name} url={map.url} />
						</Row>
					);
				})}
			</div>

			<div className="mis">
				<Row justify="center">
					<Text h2>Misc</Text>
				</Row>

				{miscMap.map((map: { name: string; url: string }) => {
					return (
						<Row key={map.url} justify="center">
							<Misc name={map.name} url={map.url} />
						</Row>
					);
				})}
			</div>
		</section>
	);
};

export default Accounts;
