import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Transition } from '@headlessui/react'
import whiteLogo from '../images/zion_dials_white_logo.svg'
import blackLogo from '../images/zion_dials_black_logo.svg'
import HeaderBrand from './headerBrand'
import HeaderLink from './headerLink'
import HeaderMobileLink from './headerMobileLink'

const HeaderNavLinks = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/blog',
    text: 'Blog',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
]
function Header(props) {
  const { siteTitle } = props
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="relative">
      <div className="py-4 bg-gray-900">
        <nav className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6" aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <HeaderBrand logoPath={whiteLogo} className="w-auto h-8 sm:h-10" siteTitle={siteTitle} />
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  aria-expanded="false"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {HeaderNavLinks.map(({ path, text }) => (
                <HeaderLink key={path} path={path} text={text} />
              ))}
            </div>
          </div>
        </nav>
      </div>
      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="uration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden">
          <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <HeaderBrand logoPath={blackLogo} className="w-auto h-8" siteTitle={siteTitle} />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {HeaderNavLinks.map(({ path, text }) => (
                  <HeaderMobileLink key={path} path={path} text={text} />
                ))}
              </div>
              <div className="px-5 mt-6">
                <a
                  href="#"
                  className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
