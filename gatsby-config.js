module.exports = {
  siteMetadata: {
    title: `🧰 Those Guys Appliance Repair 🧺`,
    description: `Clovis, New Mexico's #1 Appliance Repairmen! We service and repair all makes and models!`,
    author: `Conor Hinchee`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Those Guys Appliance Repair`,
        short_name: `Those Guys`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ThoseGuysLogo.jpg`,
      },
    },
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Do Hyeon`,
          `Righteous`,
          `Roboto`,
          `Lobster`,
          `Orbitron`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0, 0, 0, 0.5)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
          contentLabel: `Modal`
        }
      }
    }
  ],
};
