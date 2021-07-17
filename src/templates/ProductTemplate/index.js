import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid } from './styles';

// this is a tagged template literal
// exporting a query in gatsby like this is called a "page query"
// anytime context is passed to component to render for particular page
// you gain access to that variable or that context within the graphql query itself
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

// When you export a page query like above
// Gatsby will inject the result into props under data
export default function ProductTemplate({ data }) {
  console.log(data);
  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
        </div>
        <ImageGallery images={data.shopifyProduct.images} />
      </Grid>
    </Layout>
  );
}
