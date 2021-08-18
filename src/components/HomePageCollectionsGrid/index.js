import React from 'react';
import { CollectionTile } from '../CollectionTile';

export function HomePageCollectionsGrid({ collections }) {
  return (
    <div>
      {collections.map(collection => (
        <CollectionTile
          key={collection.shopifyId}
          title={collection.title}
          description={collection.description}
          backgroundImage={collection.image.localFile.childImageSharp.fluid}
        />
      ))}
    </div>
  );
}
