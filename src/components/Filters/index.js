import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import { CategorieFilteredItem } from './CategorieFilteredItem';
import { FiltersWrapper } from './styles';

export function Filters() {
  const { collections } = useContext(ProductContext);

  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collections.map(collection => (
        <CategorieFilteredItem
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
