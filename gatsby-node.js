const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

function isIndexPage(post) {
  return path.basename(post.node.fileAbsolutePath) === "index.md";
}

function isNewsPost(post) {
  return post.node.fileAbsolutePath.includes("/src/pages/posts/");
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const templates = {
      list: path.resolve("./src/templates/list.tsx"),
      single: path.resolve("./src/templates/single.tsx"),
      post: path.resolve("./src/templates/post.tsx"),
      blocks: path.resolve("./src/templates/blocks.tsx"),
    };
    resolve(
      // query for markdown files
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  excerpt(format: PLAIN)
                  fileAbsolutePath
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    template
                    date(formatString: "MMMM DD, YYYY")
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // create the posts
        const posts = result.data.allMarkdownRemark.edges;

        for (post of posts) {
          let postContext = {
            slug: post.node.fields.slug,
          };

          // if it's a post index, add corresponding posts to context
          if (isIndexPage(post)) {
            const parentRelPath = path.dirname(
              path.relative(__dirname, post.node.fileAbsolutePath)
            );
            postContext.children = posts.filter(({ node }) => {
              if (path.basename(node.fileAbsolutePath) === "index.md") {
                return false;
              }
              const childRelPath = path.relative(
                __dirname,
                node.fileAbsolutePath
              );
              return childRelPath.startsWith(parentRelPath);
            });
          }

          // determine which layout to use for post
          let templateComponent;
          if (post.node.frontmatter.template) {
            templateComponent = templates[post.node.frontmatter.template];
          } else if (isIndexPage(post)) {
            templateComponent = templates.list;
          } else if (isNewsPost(post)) {
            // For posts within /src/pages/posts, use the news post template.
            templateComponent = templates.post;
          } else {
            templateComponent = templates.single;
          }

          createPage({
            path: post.node.fields.slug,
            component: templateComponent,
            context: postContext,
          });
        }
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
