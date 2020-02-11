import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const FrigidaireIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      navbarIcon: file(relativePath: { eq: "brands/Current_frigidaire_logo.png"}) {
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
          alt="Frigidaire Company Logo" 
    />;
};

export default FrigidaireIcon;
