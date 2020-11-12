import React from "react";

export const visuallyHiddenStyle = {
  position: "absolute",
  height: "1px",
  width: "1px",
  overflow: "hidden",
  clip: "rect(1px, 1px, 1px, 1px)",
  whiteSpace: "nowrap" /* added line */,
} as any;

export const VisuallyHidden: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div css={visuallyHiddenStyle} {...props}>
    {children}
  </div>
);
