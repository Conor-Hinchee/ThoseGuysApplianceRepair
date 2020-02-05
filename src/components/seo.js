/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `business.business`,
        },
        {
          property: `business:contact_data:street_address`,
          content: `2019 Thornton Street`,
        },
        {
          property: `business:contact_data:locality`,
          content: `Clovis`,
        },
        {
          property: `business:contact_data:region`,
          content: `New Mexico`,
        },
        {
          property: `business:contact_data:postal_code`,
          content: `88101`,
        },
        {
          property: `business:contact_data:country_name`,
          content: `United States`,
        },
        {
          property: `business:contact_data:phone_number`,
          content: `15757428441`,
        },
        {
          property: `business:hours:day`,
          content: `monday`,
        },
        {
          property: `business:hours:start`,
          content: `08:00`,
        },
        {
          property: `business:hours:end`,
          content: `17:00`,
        },
        {
          property: `business:hours:day`,
          content: `tuesday`,
        },
        {
          property: `business:hours:start`,
          content: `08:00`,
        },
        {
          property: `business:hours:end`,
          content: `17:00`,
        },
        {
          property: `business:hours:day`,
          content: `wednesday`,
        },
        {
          property: `business:hours:start`,
          content: `08:00`,
        },
        {
          property: `business:hours:end`,
          content: `17:00`,
        },
        {
          property: `business:hours:day`,
          content: `thursday`,
        },
        {
          property: `business:hours:start`,
          content: `08:00`,
        },
        {
          property: `business:hours:end`,
          content: `17:00`,
        },
        {
          property: `business:hours:day`,
          content: `friday`,
        },
        {
          property: `business:hours:start`,
          content: `08:00`,
        },
        {
          property: `business:hours:end`,
          content: `17:00`,
        },
        {
          property: `place:location:latitude`,
          content: `34.419055`,
        },
        {
          property: `place:location:longitude`,
          content: `-103.213957`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image:src`,
          content: `%PUBLIC_URL%/shareImage.jpg`,
        },{
          name: `twitter:domain`,
          content: `https://thoseguysappliancerepair.com`,
        },
      ].concat(meta)}
       
    >
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "ProfessionalService",
          "image": "%PUBLIC_URL%/shareImage.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Clovis",
            "addressRegion": "NM",
            "streetAddress": "2019 Thornton Street"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.419055",
            "longitude": "-103.213957"
          },
          "description": "Clovis, New Mexico's #1 Appliance Repairmen! We service and repair all makes and models!",
          "name": "Those Guys Appliance Repair",
          "telephone": "575-742-8441",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          },
          "url": "https://thoseguysappliancerepair.com/",
          "areaServed": ["Clovis", "Portales", "Texico", "Melrose", "Farewell", "Muleshoe"],
          "sameAs": "https://www.facebook.com/Those-Guys-Appliance-Repair-2000600620203240/"
        }
      `}</script>
      <link href="https://fonts.googleapis.com/css?family=Do+Hyeon|Righteous|Roboto" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lobster|Orbitron" rel="stylesheet" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
