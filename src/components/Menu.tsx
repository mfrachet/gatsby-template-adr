import React from "react";
import { defaultTheme } from "./Layout";

const menuCss = {
  position: "fixed",
  left: 0,
  width: defaultTheme.sizes.menu,
  height: "100%",
  borderRight: `1px solid ${defaultTheme.colors.background2}`,
  background: defaultTheme.colors.background,
  zIndex: 1,
  padding: `${defaultTheme.spaces[3]} 0`,

  // margin the fixed header
  marginTop: defaultTheme.sizes.header,
  display: "none",

  [defaultTheme.mq.desktop]: {
    display: "block",
  },
};

export const Menu = ({ children }) => {
  return (
    <nav css={menuCss} aria-label="List of all your architecture decision records">
      <ul css={{ margin: 0 }}>{children}</ul>
    </nav>
  );
};

export const MenuItem = ({ children }) => {
  return (
    <li
      css={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: defaultTheme.fontSizes[2],
        margin: 0,
        padding: `${defaultTheme.spaces[0]} 0`,

        "& a": {
          padding: `0 ${defaultTheme.spaces[3]}`,
          borderLeft: "4px solid transparent",
        },

        "& a.link-active": {
          color: defaultTheme.colors.primary,
          fontWeight: "bold",
          borderLeft: `4px solid ${defaultTheme.colors.primary}`,
        },
      }}
    >
      {children}
    </li>
  );
};
