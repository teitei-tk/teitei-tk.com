import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";

import ExternalLink from "@/components/common/ExternalLink";

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
							<ExternalLink name={map.name} url={map.url} />
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
							<ExternalLink name={map.name} url={map.url} />
						</GridItem>
					);
				})}
			</Grid>
		</section>
	);
};

export default Accounts;

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest;
	const { screen } = await import("@testing-library/react");
	const { renderWithChakra } = await import("@/utils/test-utils");

	describe("Accounts component", () => {
		it("renders SNS and blog accounts correctly", () => {
			const mockProps = {
				twitter: "https://twitter.com/test_twitter",
				github: "https://github.com/test_github",
				qiita: "https://qiita.com/test_qiita",
				speakerDeck: "https://speakerdeck.com/test_speakerdeck",
				note: "https://note.com/test_note",
				hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
				zenn: "https://zenn.dev/test_zenn",
			};

			renderWithChakra(<Accounts {...mockProps} />);

			// SNS accounts
			expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute("href", mockProps.twitter);
			expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", mockProps.github);
			expect(screen.getByRole("link", { name: "Zenn" })).toHaveAttribute("href", mockProps.zenn);
			expect(screen.getByRole("link", { name: "Qiita" })).toHaveAttribute("href", mockProps.qiita);
			expect(screen.getByRole("link", { name: "SpeakerDeck" })).toHaveAttribute("href", mockProps.speakerDeck);

			// Blog accounts
			expect(screen.getByRole("link", { name: "HatenaBlog" })).toHaveAttribute("href", mockProps.hatenaBlog);
			expect(screen.getByRole("link", { name: "note" })).toHaveAttribute("href", mockProps.note);
		});

		it("renders section headings", () => {
			const mockProps = {
				twitter: "https://twitter.com/test_twitter",
				github: "https://github.com/test_github",
				qiita: "https://qiita.com/test_qiita",
				speakerDeck: "https://speakerdeck.com/test_speakerdeck",
				note: "https://note.com/test_note",
				hatenaBlog: "https://hatenablog.com/test_hatenaBlog",
				zenn: "https://zenn.dev/test_zenn",
			};

			renderWithChakra(<Accounts {...mockProps} />);

			expect(screen.getByText("Accounts")).toBeInTheDocument();
			expect(screen.getByText("Blogs")).toBeInTheDocument();
		});
	});
}
