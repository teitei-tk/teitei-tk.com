import styles from "@/styles/components/layout.module.css";
import type { NextPage } from "next";
import type * as React from "react";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<section>
			<div className={styles.container}>{children}</div>
		</section>
	);
};

export default Layout;
