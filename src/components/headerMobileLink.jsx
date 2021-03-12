import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function HeaderMobileLink(props) {
  const { path, text, color, hover } = props
  return (
    <Link to={path} className={`block px-3 py-2 text-base font-medium text-${color}-900 rounded-md hover:bg-${hover}-50`}>
      {text}
    </Link>
  )
}

HeaderMobileLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  hover: PropTypes.string,
}

HeaderMobileLink.defaultProps = {
  path: '#',
  text: '#',
  color: 'gray',
  hover: 'gray',
}

export default HeaderMobileLink
