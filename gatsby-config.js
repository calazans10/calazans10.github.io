const differenceInYears = require("date-fns/differenceInYears")

module.exports = {
  siteMetadata: {
    title: `Jeferson Calazans | Software Developer`,
    description: `Jeferson Calazans is a passionate software developer with a degree in Computer Science. He has been working with web development for the past ${differenceInYears(
      new Date(),
      new Date(2012, 2, 1)
    )} years.`,
    authorName: `Jeferson Calazans`,
    authorFullName: `Jeferson Farias Calazans`,
    siteUrl: `http://calazans10.com`,
    image: `src/images/logo-large.png`,
    twitterUsername: `@calazans10`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `calazans10`,
        short_name: `calazans10`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/logo-large.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-63606548-1",
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `fbh7blq`,
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
