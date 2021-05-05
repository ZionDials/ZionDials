import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function NewsletterForm(props) {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-10 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Join our email list and get notified about new content</h2>
            <p className="max-w-3xl mt-4 text-lg text-indigo-100">
              Be the first to receive our latest content with the ability to opt-out at anytime. We promise to not spam your inbox or share your email with any third parties.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-indigo-100">
              We care about the protection of your data. Read our{' '}
              <Link to="/privacy-policy" className="font-medium text-white underline">
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

NewsletterForm.propTypes = {}

export default NewsletterForm
