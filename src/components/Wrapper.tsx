import React from "react";
import { defaultTheme } from "./Layout";

export const Wrapper: React.FC = ({ children }) => (
  <div
    css={(theme) => ({
      marginRight: theme.spaces[4],
      marginLeft: theme.spaces[4],
      [defaultTheme.mq.desktop]: {
        marginRight: theme.spaces[11],
        marginLeft: `calc(${defaultTheme.sizes.menu} + ${theme.spaces[8]})`,
      },
    })}
  >
    {children}
  </div>
);
