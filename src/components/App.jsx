import React, { useState, useEffect, useRef } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import MyLoader from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const API_KEY = '37257084-385968b29bb2898cd9ae06014';
  const galleryRef = useRef();

  useEffect(() => {
    if (query !== null) {
      fetchImages();
    }
  }, [query, fetchImages]);

  const fetchImages = () => {
    if (!query) return;

    setLoading(true);

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  };

  const handleSearchSubmit = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = link => {
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
        <ImageGallery
          ref={galleryRef}
          images={images}
          onImageClick={handleImageClick}
        />
      )}
      {loading && <MyLoader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} show={true} />}
      {showModal && <Modal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

