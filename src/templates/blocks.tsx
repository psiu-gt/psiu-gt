import React from "react";
import Helmet from "react-helmet";
// eslint-disable-next-line
import { graphql } from "gatsby";

import Layout from "../components/layout";

// import blocks
import ThreeCol from "../components/blocks/3col";

import Feature from "../components/blocks/feature";
import CTA from "../components/blocks/cta";
import Hero from "../components/blocks/hero";
import HeroCarousel from "../components/blocks/hero-carousel";
import News from "../components/blocks/news";

const BlocksTemplate = ({ data }: { data: any }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = post.excerpt;

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />
      {post.frontmatter.blocks.map((block: any, index: any) => {
        switch (block.component) {
          case "3col":
            return <ThreeCol block={block} key={index} />;
          case "feature":
            return <Feature block={block} key={index} />;
          case "cta":
            return <CTA block={block} key={index} />;
          case "hero":
            return <Hero block={block} key={index} />;
          case "hero_carousel":
            return <HeroCarousel block={block} key={index} />;
          case "news":
            return <News block={block} key={index} />;
          default:
            return "";
        }
      })}
    </Layout>
  );
};

export default BlocksTemplate;

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
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
        blocks {
          component
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          title
          subtitle
          content
          orientation
          background
          button {
            url
            text
          }
          sliderImage1 {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          sliderImage2 {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          sliderImage3 {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`;
