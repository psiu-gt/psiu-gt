import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import "../css/main.scss";

import favicon from "./favicon.png";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  padding-bottom: 9.125em;
`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            footer
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
          link={[
            {
              rel: "shortcut icon",
              type: "image/png",
              href: `${favicon}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <LayoutWrapper>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer content={data.site.siteMetadata.footer} />
        </LayoutWrapper>
      </>
    )}
  />
);

export default Layout;
