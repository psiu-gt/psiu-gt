import React, { Component } from 'react'
import { Link } from 'gatsby'

import { graphql, StaticQuery } from 'gatsby'

class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  toggleNavState = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  render() {
    return (
      <nav
        className="navbar is-primary navbar-shadow main-navigation"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item has-text-weight-semibold" to="/">
            {this.props.siteTitle}
          </Link>

          <span
            onClick={this.toggleNavState}
            onKeyDown={this.toggleNavState}
            tabIndex={0}
            role="button"
            className={
              this.state.navbarOpen
                ? 'navbar-burger burger is-active'
                : 'navbar-burger burger'
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="mainMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div
          id="mainMenu"
          className={
            this.state.navbarOpen ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-start">
            <StaticQuery
              query={graphql`
                {
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
              `}
              render={(data) =>
                data.allMainMenuJson.edges.map((edge) => {
                  console.log(edge)
                  if (edge.node.submenu) {
                    // edge.node.submenu.map((menuItem) => {
                    return (
                      <div
                        className="navbar-item has-dropdown is-hoverable"
                        key={edge.node.id}
                      >
                        <a className="navbar-link" href={edge.node.url}>
                          {edge.node.title}
                        </a>
                        <div className="navbar-dropdown is-boxed">
                          {edge.node.submenu.map((menuItem, index) => {
                            return (
                              <Link
                                key={index}
                                to={menuItem.url}
                                className="navbar-item"
                              >
                                {menuItem.title}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  }

                  return edge.node.type === 'internal' ? (
                    <Link
                      key={edge.node.id}
                      to={edge.node.url}
                      className="navbar-item"
                    >
                      {edge.node.title}
                    </Link>
                  ) : (
                    <a
                      key={edge.node.id}
                      className="navbar-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={edge.node.url}
                    >
                      {edge.node.title}
                    </a>
                  )
                })
              }
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
