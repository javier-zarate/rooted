import React, { useContext } from 'react';
import styled from 'styled-components';
import { Layout, Filters } from 'components';
import ProductContext from 'context/ProductContext';

// cant add additonal file for styles in Gatsby under pages folder
const Content = styled.div`
  display: grid;
  grid-gap:  20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

export default function AllProducts() {
  const { products, collections } = useContext(ProductContext);

  return (
    <Layout>
      <h1>{products.length} products</h1>
      <Content>
        <Filters />
        <div>Products</div>
      </Content>
    </Layout>
  );
}
