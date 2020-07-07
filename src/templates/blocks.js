import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import ThreeCol from '../components/blocks/3col'
import Feature from '../components/blocks/feature'
import CTA from '../components/blocks/cta'
import Hero from '../components/blocks/hero'
import HeroCarousel from '../components/blocks/hero-carousel'

class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {post.frontmatter.blocks.map((block, index) => {
          switch (block.component) {
            case '3col':
              return <ThreeCol block={block} key={index} />
            case 'feature':
              return <Feature block={block} key={index} />
            case 'cta':
              return <CTA block={block} key={index} />
            case 'hero':
              return <Hero block={block} key={index} />
            case 'hero_carousel':
              return <HeroCarousel block={block} key={index} />
            default:
              return ''
          }
        })}
      </Layout>
    )
  }
}

export default BlocksTemplate

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
              fluid(maxWidth: 800) {
                srcSet
              }
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
          col1 {
            title
            content
          }
          col2 {
            title
            content
          }
          col3 {
            title
            content
          }
          sliderImage1 {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          sliderImage2 {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          sliderImage3 {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
        }
      }
    }
  }
`
