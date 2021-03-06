/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  Button,
  SEO,
} from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

// this is a tagged template literal
// exporting a query in gatsby like this is called a "page query"
// anytime context is passed to component to render for particular page
// you gain access to that variable or that context within the graphql query itself
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

// When you export a page query like above
// Gatsby will inject the result into props under data
export default function ProductTemplate({ data }) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  useEffect(() => {
    getProductById(data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [getProductById, setProduct, data.shopifyProduct.shopifyId, variantId]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      item => item.id === e.target.value
    );
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <SEO
        description={data.shopifyProduct.description}
        title={data.shopifyProduct.title}
      />
      <Button onClick={() => navigate(-1)}>Back to products</Button>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select
                    onChange={handleVariantChange}
                    value={selectedVariant.id}
                  >
                    {product?.variants.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
            </>
          )}
          {!!selectedVariant && (
            <>
              <Price>${selectedVariant?.price}</Price>
              <ProductQuantityAdder
                available={selectedVariant.available}
                variantId={selectedVariant.id}
              />
            </>
          )}
        </div>
        <ImageGallery
          selectedVariantImageId={selectedVariant?.image.id}
          images={data.shopifyProduct.images}
        />
      </Grid>
    </Layout>
  );
}
