import React from 'react';
import PropTypes from 'prop-types';
import style from './Item.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const handleImageClick = () => {
    onImageClick(image.largeImageURL); 
  };

  return (
    <img
      src={image.webformatURL}
      alt={image.tags}
      className={style.image}
      onClick={handleImageClick}
    />
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
