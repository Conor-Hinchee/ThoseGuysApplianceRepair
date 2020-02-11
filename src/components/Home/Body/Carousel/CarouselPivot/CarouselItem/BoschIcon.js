import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const BoschIcon = () => {
  const data = useStaticQuery(graphql`
    query {
        boschIcon: file(relativePath: { eq: "brands/Bosch_brand.png"}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
    }    
 `);

  return <Img fluid={data.boschIcon.childImageSharp.fluid} 
          alt="Bosch Company Logo" 
    />;
};

export default BoschIcon;
