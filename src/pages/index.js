import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomePageCollectionsGrid,
  // FeaturedProduct,
  MainTile
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);

  return (
    <Layout>
      <SEO description="Rooted Home Page" title="Homepage" />
      <MainTile />
        <HomePageCollectionsGrid
          collections={collections.filter(
            collection => collection.title !== 'Featured'
          )}
        />
        {/* <FeaturedProduct /> */}
    </Layout>
  );
};

export default IndexPage;
