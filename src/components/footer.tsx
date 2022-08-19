import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  &&& {
    padding-bottom: 2em;
    padding-top: 2em;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;

const Footer = ({ content }: any) => (
  <FooterWrapper className="footer has-background-info	">
    <div className="social-icons is-centered">
      <a
        href="https://www.facebook.com/psiugt/"
        className="button is-medium is-facebook"
      >
        <span className="icon">
          <i className="fa fa-facebook"></i>
        </span>
      </a>
      <a
        href="https://www.instagram.com/gtpsiu"
        className="button is-medium is-instagram"
      >
        <span className="icon">
          <i className="fa fa-instagram"></i>
        </span>
      </a>
      <a
        href="https://twitter.com/psiugt"
        className="button is-medium is-twitter"
      >
        <span className="icon">
          <i className="fa fa-twitter"></i>
        </span>
      </a>
    </div>
    <div
      className="container has-text-centered"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </FooterWrapper>
);

export default Footer;
