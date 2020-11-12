import { Link } from "gatsby";
import React from "react";
import { defaultTheme } from "./Layout";
import { Spacer } from "./Spacer";

const amendmentCss = {
  fontSize: defaultTheme.fontSizes[1],
  borderRadius: `${defaultTheme.radii[0]}px`,
  padding: `${defaultTheme.spaces[4]} ${defaultTheme.spaces[3]}`,
};

const primaryCss = {
  backgroundColor: defaultTheme.colors.primaryLight,
  borderLeft: `5px solid ${defaultTheme.colors.primary}`,
};

const warningCss = {
  backgroundColor: defaultTheme.colors.warningLight,
  borderLeft: `5px solid ${defaultTheme.colors.warning}`,
};

export interface AmendmentProps {
  by?: Array<{ slug: string; title: string }>;
  to?: { slug: string; title: string };
}

export const Amendment = ({ by, to }: AmendmentProps) => {
  return (
    <>
      {to && (
        <p css={[amendmentCss, primaryCss, { margin: 0 }]}>
          This ADR amends <Link to={to.slug}>{to.title}</Link>
        </p>
      )}

      {to && by && <Spacer size={3} />}

      {by && (
        <div css={[amendmentCss, warningCss]}>
          <p>This ADR has been amended by:</p>
          <ul css={{ marginBottom: 0 }}>
            {by.map((amend) => (
              <li key={amend.slug}>
                <Link to={amend.slug} activeClassName="active">
                  {amend.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
