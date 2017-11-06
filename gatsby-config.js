module.exports = {
  siteMetadata: {
    title: `Gatsby Wiki`,
    author: `Mike Polinowski`,
    description: `Trying out Gatsby.js`
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `darkslategray`,
          // Disable the loading spinner.
          showSpinner: false,
        }
      },
      {
      resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'Gatsby Wiki',
          short_name: 'Gatsby Wiki',
          start_url: '/',
          background_color: 'snow',
          theme_color: 'darkslategray',
          display: 'minimal-ui',
          icons: [
            {
              // Everything in /static will be copied to an equivalent
              // directory in /public during development and build, so
              // assuming your favicons are in /static/favicons,
              // you can reference them here
              src: `/apple-touch-icon.png`,
              sizes: `180x180`,
              type: `image/png`,
            },
            {
              src: `/favicon.ico`,
              sizes: `256x256`,
              type: `image/png`,
            },
          ],
        },
      },
      `gatsby-plugin-offline`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
        },
      },
      `gatsby-plugin-sharp`,
      // `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 930,
                sizeByPixelDensity: true,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            'gatsby-remark-copy-linked-files',
          ],
        },
      },
    ],
}
