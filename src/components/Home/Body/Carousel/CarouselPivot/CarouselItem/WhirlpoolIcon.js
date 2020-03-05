import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const WhirlpoolIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      whirlpool: file(relativePath: { eq: "brands/whirlpool.png"}) {
        childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
      }
    }
  `);

  return <Img fluid={data.whirlpool.childImageSharp.fluid} 
            alt="Whirlpool Company Logo" 
    />;
};

export default WhirlpoolIcon;
