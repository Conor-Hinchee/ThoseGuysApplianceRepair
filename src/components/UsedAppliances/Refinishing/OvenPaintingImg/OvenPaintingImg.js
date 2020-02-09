import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const OvenPaintingImg = () => {
  const data = useStaticQuery(graphql`
    query {
      ovenPainting: file(relativePath: { eq: "ovenpainting.jpg" }) {
        childImageSharp {
            fixed(width: 275, height: 184) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `);

  return <Img fixed={data.ovenPainting.childImageSharp.fixed} 
        className="rounded" style={{border: "3px solid black"}}
        alt="Refrigerator refinished with paint"
    />;
};

export default OvenPaintingImg;
