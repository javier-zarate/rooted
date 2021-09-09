import React, {useContext} from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProduct() {
  const {collections} = useContext(ProductContext);

  const featuredCollection = collections.find(collection => collection.title === 'Featured');

  return (
    <section>
      <h1>Products</h1>
      <ProductsGrid products={featuredCollection.products}/>
    </section>
  );
}
