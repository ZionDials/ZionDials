import React from 'react'
import PropTypes from 'prop-types'

function CenteredHeader(props) {
  const { title, date } = props

  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">{date}</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl font-heading">{title}</p>
        </div>
      </div>
    </div>
  )
}

CenteredHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
}

CenteredHeader.defaultProps = {
  title: '',
  date: '',
}

export default CenteredHeader
