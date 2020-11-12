import React from "react";
import { defaultTheme } from "./Layout";

export const Spacer = ({ size }: { size: number }) => {
  return <div aria-hidden={true} css={{ height: defaultTheme.spaces[size] }} />;
};
