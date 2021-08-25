import React, { useContext } from 'react';
import { Layout } from 'components';
import ProductContext from 'context/ProductContext';

export default function AllProducts() {
  const { products, collections } = useContext(ProductContext);

  return (
    <Layout>
      <h1>{products.length} products</h1>
      <div>
        {collections.map(collection => (
          <div key={collection.shopifyId}>{collection.title}</div>
        ))}
      </div>
    </Layout>
  );
}
