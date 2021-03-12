import React from 'react'
import PropTypes from 'prop-types'

function Container(props) {
  const { children } = props
  return <div className="container px-4 mx-auto sm:px-6 lg:px-8">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
