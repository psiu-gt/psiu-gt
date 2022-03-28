import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostList from "../post-list";

const News = ({ block }: any) => (
  <section
    className={
      block.background
        ? `hero is-medium has-text-centered is-${block.background}`
        : "hero is-medium has-text-centered"
    }
  >
    <div className="hero-body">
      <div className="container">
        <h2 className="title is-2">{block.title}</h2>
        {block.subtitle && <p className="subtitle">{block.subtitle}</p>}
        <StaticQuery
          query={graphql`
            query Posts {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 4
                filter: {
                  fileAbsolutePath: { regex: "/(pages/posts/(?!index))/" }
                }
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
          `}
          render={(data) => (
            <PostList posts={data.allMarkdownRemark.edges}></PostList>
          )}
        />
      </div>
    </div>
  </section>
);

export default News;
