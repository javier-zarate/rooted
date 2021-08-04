import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

// active prop -> When a image thumbnail is active it will be highlighed
// image prop -> to render prop
// onclick -> to highlight current image
export default function ImageThumbnail({ isActive, onClick, image }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
      <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
}
