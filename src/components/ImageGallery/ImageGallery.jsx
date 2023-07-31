import React, { forwardRef } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './Galery.module.css';


const ImageGallery = forwardRef(({ images, onImageClick }, ref) => {
  return (
    <ul className={style.galerry} ref={ref}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
});

export default ImageGallery;
