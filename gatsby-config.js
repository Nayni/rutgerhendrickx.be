module.exports = {
  siteMetadata: {
    title: `rutgerhendrickx.be`,
    description: `Curriculum vitae of Rutger Hendrickx`,
    author: `rutgerhendrickx@gmail.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rutgerhendrickx.be`,
        short_name: `rhendrickx`,
        start_url: `/`,
        background_color: `#E91E63`,
        theme_color: `#E91E63`,
        display: `standalone`,
        icon: `src/images/rh-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,500`, `Material Icons`]
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-tslint`
  ]
};
