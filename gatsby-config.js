/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Modern Styles",
    description: "Great Picks At Wholesale Prices",
    author: "Justin Scorzafava",
    url: `https://jscorz-clothingstore.netlify.app/`,
    image: `/modernstyles.png`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `p5tl8d8f7yf9`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Inconsolata"],
        },
      },
    },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    // objects: [
    //   "Balance",
    //   "BalanceTransaction",
    //   "Product",
    //   "ApplicationFee",
    //   "Sku",
    //   "Subscription",
    // ],
    //   secretKey: `${process.env.STRIPE_SECRET_KEY}`,
    //   downloadFiles: true,
    // },
    // }
    `gatsby-plugin-react-helmet`,
  ],
}
