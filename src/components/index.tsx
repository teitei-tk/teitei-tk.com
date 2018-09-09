import * as React from "react";

import { Summary } from "./summary";
import { Profile } from "./profile";
import { Accounts } from "./accounts";
import { Donate } from "./donate";
import { Footer } from "./footer";

export const Components = () => {
  return (
    <div>
      <Summary />
      <Profile />
      <Accounts />
      <Donate />
      <Footer />
    </div>
  );
};
