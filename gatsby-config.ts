import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Only You`,
    siteTitleAlt: `Only You | The Memories We Make Together`,
    siteHeadline: `Only You | The Memories We Make Together`,
    siteUrl: `https://onlyyou.netlify.app`,
    siteDescription: "The Memories We Make Together",
    siteImage: `/banner.jpg`,
    author: `@retro90s`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Only You`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Only You | The Memories We Make Together`,
        short_name: `Only You`,
        description: `The Memories We Make Together`,
        start_url: `/`,
        background_color: `#fff`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
