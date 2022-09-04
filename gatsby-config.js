module.exports = {
  siteMetadata: {
    siteTitle: `Only You`,
    siteTitleAlt: `Only You | Long Nhat Nguyen`,
    siteHeadline: `Only You | Long Nhat Nguyen`,
    siteUrl: `https://onlyyou.netlify.app`,
    siteDescription: "Photos by Long Nhat Nguyen",
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Only You`,
        socialMedia: [{}],
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
        name: `Only You | Long Nhat Nguyen`,
        short_name: `Only You`,
        description: `Photos by Long Nhat Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
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
  ],
}