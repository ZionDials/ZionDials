import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../images/zion_dials_white_logo.svg'

function HeaderBrand(props) {
  const { siteTitle, className, logoPath } = props
  return (
    <Link to="/">
      <span className="sr-only">{siteTitle}</span>
      <img className={className} src={logoPath} alt={siteTitle} />
    </Link>
  )
}

HeaderBrand.propTypes = {
  siteTitle: PropTypes.string,
  className: PropTypes.string,
  logoPath: PropTypes.string,
}

HeaderBrand.defaultProps = {
  siteTitle: '',
  className: '',
  logoPath: logo,
}

export default HeaderBrand
