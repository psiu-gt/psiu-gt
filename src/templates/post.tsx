import React from "react";
import Helmet from "react-helmet";
// eslint-disable-next-line
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

class PostTemplate extends React.Component {
  render() {
    const post = (this.props as any).data.markdownRemark;
    const siteTitle = (this.props as any).data.site.siteMetadata.title;
    const siteDescription = post.excerpt;

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className="section page-content">
          <div className="container article-header has-text-centered">
            <img
              alt="Psi Upsilon Header"
              src={(this.props as any).data.topLogo.publicURL}
            />
            <img
              className="cogwheel"
              alt="Article divider"
              src={(this.props as any).data.cogwheel.publicURL}
            />
            <h1 className="title is-1">{post.frontmatter.title}</h1>
            {post.frontmatter.date && (
              <em className="is-size-6 has-text-grey">
                {post.frontmatter.date}
              </em>
            )}
            <hr />
          </div>
          <main className="container content-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </main>
        </section>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    topLogo: file(relativePath: { eq: "toplogo.png" }) {
      publicURL
    }
    cogwheel: file(relativePath: { eq: "cogwheelbreak.png" }) {
      publicURL
    }
  }
`;
