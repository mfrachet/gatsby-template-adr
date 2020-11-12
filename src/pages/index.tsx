import React from "react";
import { graphql, Link } from "gatsby";
import { defaultTheme, Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { SkipToContent, SkipToContentDestination } from "../components/SkipToContent";
import Helmet from "react-helmet";
import { Spacer } from "../components/Spacer";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site,
  },
}) => {
  const repositoryUrl = site?.siteMetadata?.repositoryUrl;
  const projectName = site?.siteMetadata?.projectName;

  const Records = edges.map((edge) => (
    <li key={edge.node.id}>
      <Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link>
      {` `}- <time dateTime={edge.node.frontmatter.date}>{edge.node.frontmatter.date}</time>
    </li>
  ));

  return (
    <Layout>
      <Helmet>
        <html lang="en" />

        <title>ADRs | Architecture decision records</title>

        <meta
          name="description"
          content="Marvin Frachet is a senior software engineer building product at scale, with a passion for code quality and automation."
        />
      </Helmet>

      <SkipToContent>Jump to content</SkipToContent>

      <Wrapper>
        <SkipToContentDestination />

        <main css={{ padding: `${defaultTheme.spaces[4]} 0` }}>
          <h1>
            All the records for
            {repositoryUrl ? (
              <a
                href={repositoryUrl}
                rel="noopener noreferrer"
                target="_blank"
                css={{ marginLeft: defaultTheme.spaces[1] }}
              >
                {projectName}
              </a>
            ) : (
              projectName
            )}
          </h1>

          <Spacer size={4} />

          <ul>{Records}</ul>
        </main>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        repositoryUrl
        projectName
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
