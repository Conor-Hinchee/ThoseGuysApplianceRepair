import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const FridgePaintingImg = () => {
  const data = useStaticQuery(graphql`
    query {
      fridgePainting: file(relativePath: { eq: "fridgepainting.jpg" }) {
        childImageSharp {
            fixed(width: 275, height: 184) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `);

  return <Img fixed={data.fridgePainting.childImageSharp.fixed} 
        className=" rounded" style={{border: "3px solid black"}}
        alt="Refrigerator refinished with paint"
    />;
};

export default FridgePaintingImg;
