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
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
