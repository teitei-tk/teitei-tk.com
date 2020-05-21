import * as React from "react";
import { NextPage } from "next";

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
