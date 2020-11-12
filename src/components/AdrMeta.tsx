import React from "react";
import { defaultTheme } from "./Layout";

export interface AdrMetaProps {
  author?: string;
  pullRequest?: string;
  date?: string;
}

const contentCss = {
  display: "block",
  fontSize: defaultTheme.fontSizes[1],
  margin: 0,
};

export const AdrMeta = ({ author, pullRequest, date }: AdrMetaProps) => {
  return (
    <p css={contentCss}>
      Created on <time dateTime={date}>{date}</time>
      {author && (
        <span>
          {` - `}by <strong>{author}</strong>
        </span>
      )}
      {pullRequest && (
        <span>
          {` - `}
          <a href={pullRequest} target="_blank" rel="noreferrer">
            {pullRequest}
          </a>
        </span>
      )}
    </p>
  );
};
