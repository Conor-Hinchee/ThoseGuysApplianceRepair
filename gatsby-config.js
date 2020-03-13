module.exports = {
  siteMetadata: {
    title: `🧰 Those Guys Appliance Repair 🧺`,
    description: `Clovis, New Mexico's #1 Appliance Repairmen! We service and repair all makes and models!`,
    author: `Conor Hinchee`,
    siteUrl: `https://thoseguysappliancerepair.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127091657-1"
      },
    },
    `gatsby-plugin-sitemap`,
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
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://thoseguysappliancerepair.com`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
    resolve: `gatsby-plugin-accessibilityjs`,
    options: {
      injectStyles: `
        .accessibility-error {
          box-shadow: 0 0 3px 1px #f00;
          background-color: rgba(255, 0, 0, 0.25);
          position: relative;
        }
        .accessibility-error:before {
          content: "A11Y";
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          font-size: 10px;
          background-color: rgba(255, 0, 0, 0.5);
          transform: translateY(-100%);
        }
      `,
    },
  },
  `gatsby-plugin-webpack-size`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "UA-127091657-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,
    },
  },
  ],
};
