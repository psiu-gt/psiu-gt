import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

import OwlIcon from "../images/owl.svg";
import { HeaderQueryQuery, MainMenuJson } from "../../graphql-types";

const StyledOwlIcon = styled(OwlIcon)`
  max-height: 44px;
  width: auto;
`;

const StyledBrand = styled.a`
  font-size: 1.8em;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const menuData: HeaderQueryQuery = useStaticQuery(graphql`
    query HeaderQuery {
      allMainMenuJson {
        edges {
          node {
            id
            type
            url
            title
            submenu {
              type
              url
              title
            }
          }
        }
      }
    }
  `);

  const brand = (
    <div className="navbar-brand">
      <StyledBrand className="navbar-item has-text-weight-semibold" href="/">
        <StyledOwlIcon />
        &Psi;&Upsilon;
      </StyledBrand>

      <a
        role="button"
        aria-label="menu"
        aria-expanded={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        onKeyDown={() => setNavbarOpen(!navbarOpen)}
        tabIndex={0}
        className={
          navbarOpen ? "navbar-burger burger is-active" : "navbar-burger burger"
        }
        data-target="mainMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );

  const navDropdown = ({ id, url, title, submenu }: MainMenuJson) => (
    <div className="navbar-item lato-font has-dropdown is-hoverable" key={id}>
      <a className="navbar-link" href={url ?? "/"}>
        {title}
      </a>
      <div className="navbar-dropdown is-boxed">
        {submenu!.map((menuItem: any, index: number) =>
          navMenuItem({ ...menuItem, id: index })
        )}
      </div>
    </div>
  );

  const navMenuItem = ({ id, url, type, title }: MainMenuJson) => {
    return type === "internal" ? (
      <Link key={id} to={url ?? ""} className="navbar-item lato-font">
        {title}
      </Link>
    ) : (
      <a
        key={id}
        className="navbar-item lato-font"
        target="_blank"
        rel="noopener noreferrer"
        href={url ?? ""}
      >
        {title}
      </a>
    );
  };

  const navigation = (
    <div
      id="mainMenu"
      className={navbarOpen ? "navbar-menu is-active" : "navbar-menu"}
    >
      <div className="navbar-start">
        {menuData.allMainMenuJson.edges.map((edge) => {
          return edge.node.submenu
            ? navDropdown({ ...(edge.node as MainMenuJson) })
            : navMenuItem({ ...(edge.node as MainMenuJson) });
        })}
      </div>
    </div>
  );

  return (
    <header>
      <nav
        className="navbar is-primary navbar-shadow main-navigation"
        role="navigation"
        aria-label="main navigation"
      >
        {brand}
        {navigation}
      </nav>
    </header>
  );
};

export default Header;
