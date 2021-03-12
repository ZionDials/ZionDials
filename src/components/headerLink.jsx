import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function HeaderLink(props) {
  const { path, text, color, hover } = props
  return (
    <Link to={path} className={`text-base font-medium text-${color} hover:text-${hover}-300`}>
      {text}
    </Link>
  )
}

HeaderLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  hover: PropTypes.string,
}

HeaderLink.defaultProps = {
  path: '#',
  text: '#',
  color: 'white',
  hover: 'gray',
}

export default HeaderLink
