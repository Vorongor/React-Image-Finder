import React from 'react';
import PropTypes from 'prop-types';
import style from './Item.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={style.item}>
      <img
        className={style.image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={image.largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
