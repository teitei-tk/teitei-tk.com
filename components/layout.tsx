import styles from "@/styles/components/layout.module.css";
import type { LayoutProps } from "@/types/layout";

const Layout = ({ children, className, id }: LayoutProps) => {
	return (
		<main
			id={id || "main-content"}
			className={`${styles.container} ${className || ""}`.trim()}
			aria-label="メインコンテンツ"
		>
			{children}
		</main>
	);
};

export default Layout;
