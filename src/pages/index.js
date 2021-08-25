import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomePageCollectionsGrid,
  FeaturedProduct,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);

  return (
    <Layout>
      <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured'
        )}
      />
      {!!collections.find(collection => collection.title === 'Featured') && (
        <FeaturedProduct />
      )}
    </Layout>
  );
};

export default IndexPage;
