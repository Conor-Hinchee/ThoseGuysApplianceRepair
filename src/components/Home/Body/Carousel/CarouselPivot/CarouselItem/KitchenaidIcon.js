import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const KitchenaidIcon = () => {
  const data = useStaticQuery(graphql`
    query {
        kitchenaidIcon: file(relativePath: { eq: "brands/Kitchenaid-Logo.png"}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
    }    
 `);

  return <Img fluid={data.kitchenaidIcon.childImageSharp.fluid} 
          alt="KitchenAid Company Logo" 
    />;
};

export default KitchenaidIcon;
