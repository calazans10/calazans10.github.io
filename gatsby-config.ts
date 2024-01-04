import { differenceInYears } from "date-fns"
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jeferson Calazans | Software Developer`,
    description: `Jeferson Calazans is a passionate software developer with a degree in Computer Science. He has been working with web development for the past ${differenceInYears(
      new Date(),
      new Date(2011, 10, 1)
    )} years.`,
    authorName: `Jeferson Calazans`,
    authorFullName: `Jeferson Farias Calazans`,
    siteUrl: `http://calazans10.com`,
    twitterUsername: `@calazans10`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-root-import",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "calazans10",
        short_name: "calazans10",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/logo-large.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-63606548-1",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Nunito Sans"],
        },
      },
    },
    "gatsby-plugin-robots-txt",
  ],
}

export default config
