import React from 'react'
import PropTypes from 'prop-types'
import FooterSocialLink from './footerSocialLink'

function Footer(props) {
  const { siteTitle } = props
  const FooterSocialLinks = [
    {
      link: 'https://github.com/ziondials',
      className: 'fab fa-github',
    },
    {
      link: 'https://linkedin.com/in/ziondials',
      className: 'fab fa-linkedin-in',
    },
  ]
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {FooterSocialLinks.map(({ link, className }) => (
            <FooterSocialLink key={link} path={link} className={className} />
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">
            Copyright &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
