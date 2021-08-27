import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import {CategorieFilteredItem} from './CategorieFilteredItem';

export function Filters() {
  const { collections } = useContext(ProductContext);

  return (
    <div>
      <strong>Categories</strong>
      {collections.map(collection => (
        <CategorieFilteredItem title={collection.title } key={collection.shopifyId} />
      ))}
    </div>
  );
}
