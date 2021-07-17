import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';


// active prop -> When a image thumbnail is active it will be highlighed
// image prop -> to render prop
// onclick -> to highlight current image
export default function ImageThumbnail({ isactive, onClick, image }) {
  return (
    <ImageThumbnailWrapper
      onClick={() => {
        console.log('THOU IMAGE HAS BEEN CLICKETH');
      }}
    >
      <Image fluid={image} />
    </ImageThumbnailWrapper>
  );
}
