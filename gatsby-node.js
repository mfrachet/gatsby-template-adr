const amended = {};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const template = require.resolve(`./src/page-templates/adr-page-template.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              slug
              amend {
                relativePath
                childMarkdownRemark {
                  frontmatter {
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const splittedPath = node.fileAbsolutePath.split("/");
    const fileName = splittedPath[splittedPath.length - 1];
    const amendedBy = amended[fileName];

    createPage({
      path: node.frontmatter.slug,
      component: template,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        amendedBy,
        amend: node.frontmatter.amend,
      },
    });
  });
};

exports.onCreateNode = ({ node }) => {
  if (node.frontmatter && node.frontmatter.amend) {
    const key = node.frontmatter.amend;

    if (!amended[key]) {
      amended[key] = [];
    }

    amended[key].push(node.frontmatter);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
    }

    type Frontmatter @infer {
      author: String!
      amend: File @fileByRelativePath
      pullRequest: String
    }
  `);
};
