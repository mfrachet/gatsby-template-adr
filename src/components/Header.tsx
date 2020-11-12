import { Link } from "gatsby";
import React from "react";
import { defaultTheme } from "./Layout";

const headerCss = {
  borderBottom: `1px solid ${defaultTheme.colors.background2}`,
  height: defaultTheme.sizes.header,
  display: "flex",
  alignItems: "center",
  padding: `0 ${defaultTheme.spaces[6]}`,
  fontWeight: defaultTheme.fontWeights[4],
  position: "fixed",
  background: defaultTheme.colors.background,
  left: 0,
  right: 0,
  zIndex: 2,

  fontSize: defaultTheme.fontSizes[2],

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  [defaultTheme.mq.desktop]: {
    fontSize: defaultTheme.fontSizes[4],
    padding: `0 ${defaultTheme.spaces[3]}`,
  },
};

const linkCss = {
  textDecoration: "none",
  position: "fixed",
  left: defaultTheme.spaces[4],

  [defaultTheme.mq.desktop]: {
    display: "none",
  },
};

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header css={headerCss}>
      <Link aria-label="Go back" to="/" css={linkCss}>
        ←
      </Link>
      {children}
    </header>
  );
};
