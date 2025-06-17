/**
 * 外部リンクを表示するコンポーネント
 * 新しいタブで開き、セキュリティ設定を適用する
 */
import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

type ExternalLinkProps = {
	name: string;
	url: string;
};

const ExternalLink = ({ name, url }: ExternalLinkProps) => {
	return (
		<Link
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			variant="underline"
		>
			{name}
			<LuExternalLink />
		</Link>
	);
};

export default ExternalLink;

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest;
	const { render, screen } = await import("@testing-library/react");

	test("外部リンクが正しく表示される", () => {
		render(<ExternalLink name="テストサイト" url="https://example.com" />);

		const link = screen.getByRole("link", { name: /テストサイト/ });
		expect(link).toHaveAttribute("href", "https://example.com");
		expect(link).toHaveAttribute("target", "_blank");
		expect(link).toHaveAttribute("rel", "noreferrer noopener");
	});
}
