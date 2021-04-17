const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    author: `@${process.env.SITE_AUTHOR_TWITTER}`,
    siteUrl: process.env.SITE_URL,
  },
  flags: {
    // https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_NAME,
        short_name: process.env.SITE_SHORT_NAME,
        start_url: `/`,
        background_color: `#${process.env.SITE_BACKGROUND_COLOR_HEX}`,
        theme_color: `#${process.env.SITE_THEME_COLOR_HEX}`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
