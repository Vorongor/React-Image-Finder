import React from 'react';
import style from './Item.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={style.item}>
      <img className={style.image}
        src={image.webformatURL}
        alt={image.tags}
        data-large-image-url={image.largeImageURL}
        onClick={onImageClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
