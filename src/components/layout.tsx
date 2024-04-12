import type { NextPage } from "next";
import type * as React from "react";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<section>
			<div className="container">{children}</div>

			<style jsx>{`
        .container {
          width: 100%;
        }
      `}</style>
		</section>
	);
};

export default Layout;
