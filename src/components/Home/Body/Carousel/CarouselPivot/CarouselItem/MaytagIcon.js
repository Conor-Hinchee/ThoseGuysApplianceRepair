import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const MaytagIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      navbarIcon: file(relativePath: { eq: "brands/Maytag_logo_2015.png"}) {
        childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
      }
    }
  `);

  return <Img fluid={data.navbarIcon.childImageSharp.fluid} 
            alt="Maytag Company Logo" 
    />;
};

export default MaytagIcon;
