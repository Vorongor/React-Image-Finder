import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import MyLoader from './Loader/Loader';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      images: [],
      page: 1,
      loading: false,
      selectedImage: null,
      showModal: false,
    };
    this.API_KEY = '37257084-385968b29bb2898cd9ae06014';
    this.galleryRef = React.createRef();
  }

  componentDidMount() {
    // Set the click listener once the component is mounted
    this.galleryRef.current.addEventListener('click', this.handleImageClick);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    // Remove the click listener when the component is unmounted
    this.galleryRef.current.removeEventListener('click', this.handleImageClick);
  }

  fetchImages = () => {
    const { query, page } = this.state;

    if (!query) return;

    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          loading: false,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ loading: false });
      });
  };

  handleSearchSubmit = value => {
    this.setState(
      {
        query: value,
        page: 1,
        images: [],
      },
      this.fetchImages
    );
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      this.fetchImages
    );
  };

  handleImageClick = e => {
    const link = e.target.dataset.largeImageUrl;
    if (link) {
      this.setState({
        selectedImage: link,
        showModal: true,
      });
    }
  };

  handleCloseModal = () => {
    this.setState({
      selectedImage: null,
      showModal: false,
    });
  };

  render() {
    const { images, loading, selectedImage, showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          ref={this.galleryRef}
          images={images}
          onImageClick={this.handleImageClick}
        />
        {loading && <MyLoader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} show={true} />
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
