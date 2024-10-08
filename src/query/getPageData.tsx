import { gql } from "@apollo/client";

export const GetPageDataBySlug = gql`
  query GetPageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          slug
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                id
                attributes {
                  url
                  alternativeText
                }
              }
            }
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
            keywords
            metaRobots
            structuredData
            metaViewport
            canonicalURL
            NoIndex
            NoFollow
          }
        }
      }
    }
  }
`;
