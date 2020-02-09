import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const NavbarIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      navbarIcon: file(relativePath: { eq: "ThoseGuysLogo.jpg" }) {
        childImageSharp {
            fixed(width: 40, height: 40) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `);

  return <Img fixed={data.navbarIcon.childImageSharp.fixed} 
        style={{marginRight: "15px"}}   alt="Those Guys Appliance Repair Logo" 
    />;
};

export default NavbarIcon;
