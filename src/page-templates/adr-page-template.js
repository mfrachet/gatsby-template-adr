import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout, defaultTheme } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { SkipToContent, SkipToContentDestination } from "../components/SkipToContent";
import { Menu, MenuItem } from "../components/Menu";
import { Amendment } from "../components/Amendment";
import { AdrMeta } from "../components/AdrMeta";
import { Spacer } from "../components/Spacer";
import { Header } from "../components/Header";

export default function Template({ data, pageContext }) {
  const {
    markdownRemark,
    site,
    allMarkdownRemark: { edges },
  } = data;

  const repositoryUrl = site?.siteMetadata?.repositoryUrl;
  const projectName = site?.siteMetadata?.projectName;

  const { frontmatter, html } = markdownRemark;
  const { amendedBy } = pageContext;
  const amend = pageContext?.amend?.childMarkdownRemark?.frontmatter;

  return (
    <Layout>
      <Helmet>
        <html lang="en" />

        <title>{frontmatter.title}</title>

        <meta name="description" content={markdownRemark.excerpt} />
      </Helmet>

      <SkipToContent>Jump to content</SkipToContent>

      <Header>
        ADRs for{" "}
        {repositoryUrl ? (
          <a
            href={repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
            css={{ marginLeft: defaultTheme.spaces[0] }}
          >
            {projectName}
          </a>
        ) : (
          projectName
        )}
      </Header>

      <Menu>
        {edges.map((edge) => (
          <MenuItem key={edge.node.id}>
            <Link to={edge.node.frontmatter.slug} activeClassName="link-active">
              {edge.node.frontmatter.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>

      <div css={{ paddingTop: `calc(${defaultTheme.sizes.header} + ${defaultTheme.spaces[5]} )` }}>
        <Wrapper>
          <SkipToContentDestination />

          {(amendedBy || amend) && (
            <>
              <aside>
                <Amendment by={amendedBy} to={amend} />
              </aside>
              <Spacer size={3} />
            </>
          )}

          <main>
            <h1>{frontmatter.title}</h1>

            <AdrMeta author={frontmatter.author} date={frontmatter.date} pullRequest={frontmatter.pullRequest} />

            <Spacer size={5} />

            <div dangerouslySetInnerHTML={{ __html: html }} />
          </main>
        </Wrapper>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        repositoryUrl
        projectName
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        pullRequest
        author
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
