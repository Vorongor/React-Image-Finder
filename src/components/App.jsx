import React, { useState, useEffect, useRef } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import MyLoader from './Loader/Loader';
import { fetchImages } from './Fetch/Fetch'

export const App = () => {
  const [query, setQuery] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const galleryRef = useRef();

  useEffect(() => {
    if (query !== null) {
      setLoading(true);
      fetchImages(query, page)
        .then((data) => {
          setImages((prevImages) => [...prevImages, ...data]);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [query, page]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (link) => {
    if (link) {
      setSelectedImage(link);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {query && (
        <ImageGallery ref={galleryRef} images={images} onImageClick={handleImageClick} />
      )}
      {loading && <MyLoader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} show={true} />}
      {showModal && <Modal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};
