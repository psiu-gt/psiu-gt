import PropTypes from 'prop-types'
import React from 'react'

import Navbar from './navbar'

const Header = ({ siteTitle }: any) => (
  <header className="site-header">
    <section className="navigation">
      {/* <Navbar siteTitle={siteTitle} /> */}
      <Navbar />
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
