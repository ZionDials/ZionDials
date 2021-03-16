import React from 'react'
import PropTypes from 'prop-types'

function FooterSocialLink(props) {
  const { path, className } = props
  return (
    <a href={path} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
      <i className={`${className} w-6 h-6`} />
    </a>
  )
}

FooterSocialLink.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
}

export default FooterSocialLink
