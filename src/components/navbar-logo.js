import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const NavbarLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "owl.svg" }) {
          publicURL
        }
      }
    `}
    render={(data) => (
      <img id="navbar-logo" src={data.file.publicURL} alt="Psi Upsilon Owl" />
    )}
  />
)

export default NavbarLogo
