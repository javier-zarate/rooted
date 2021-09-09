import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomePageCollectionsGrid,
  // FeaturedProduct,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(!!collections);
  return (
    <Layout>
      <SEO description="Rooted Home Page" title="Homepage" />
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
