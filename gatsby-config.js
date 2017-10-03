module.exports = {
  siteMetadata: {
    title: `Gatsby Wiki`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `rebeccapurple`,
          // Disable the loading spinner.
          showSpinner: false,
      }
    },
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
          name: "Gatsby Wiki",
          short_name: "Gatsby Wiki",
          start_url: "/",
          background_color: "white",
          theme_color: "rebeccapurple",
          display: "minimal-ui",
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
  ],
}
