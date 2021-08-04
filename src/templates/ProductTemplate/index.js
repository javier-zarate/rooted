import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';

// this is a tagged template literal
// exporting a query in gatsby like this is called a "page query"
// anytime context is passed to component to render for particular page
// you gain access to that variable or that context within the graphql query itself
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
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
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    getProductById(data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(result.variants[0]);
    });
  }, [getProductById, setProduct, data.shopifyProduct.shopifyId]);

  const handleVariantChange = e => {
    setSelectedVariant(
      product?.variants.find(item => item.id === e.target.value)
    );
  };
  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          {product?.availableForSale && (
            <>
              <SelectWrapper>
                <strong>Variant</strong>
                <select
                  onChange={handleVariantChange}
                  onBlur={handleVariantChange}
                >
                  {product?.variants.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
              {!!selectedVariant && <Price>${selectedVariant?.price}</Price>}
            </>
          )}
        </div>
        <ImageGallery images={data.shopifyProduct.images} />
      </Grid>
    </Layout>
  );
}
