import React from "react";
import Helmet from "react-helmet";
// eslint-disable-next-line
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import PostList from "../components/post-list";

class ListTemplate extends React.Component {
  render() {
    const post = (this.props as any).data.markdownRemark;
    const siteTitle = (this.props as any).data.site.siteMetadata.title;
    const siteDescription = post.excerpt;
    const childPosts = (this.props as any).pageContext.children;

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className="section page-content">
          <div className="container article-header has-text-centered">
            <h1 className="title is-1">{post.frontmatter.title}</h1>
          </div>
          <main className="container content-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <PostList posts={childPosts} />
          </main>
        </section>
      </Layout>
    );
  }
}

export default ListTemplate;

export const pageQuery = graphql`
  query ListPageBySlug($slug: String!) {
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
  }
`;
