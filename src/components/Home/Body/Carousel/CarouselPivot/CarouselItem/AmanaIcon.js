import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const AmanaIcon = () => {
  const data = useStaticQuery(graphql`
    query {
        amanaIcon: file(relativePath: { eq: "brands/Amana_2016.png"}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
    }    
 `);

  return <Img fluid={data.amanaIcon.childImageSharp.fluid} 
          alt="Amana Company Logo" 
    />;
};

export default AmanaIcon;
