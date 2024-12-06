import React, { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { Loader } from "../Loader/Loader.jsx";
import { ImageGaller, ImageButton } from "./ImageGallery.js";

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    selectedImage: null, 
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageName !== this.props.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=${this.state.page}&key=47433007-7d348e0d688bd253969425f83&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState((prevState) => ({
            images:
              prevState.page === 1
                ? data.hits
                : [...prevState.images, ...data.hits],
            isLoading: false,
          }));
        });
    }
  }

  openModal = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        <ImageGaller className="gallery">
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              data={image}
              onClick={() => this.openModal(image.largeImageURL)} 
            />
          ))}
        </ImageGaller>

        {images.length > 0 && !isLoading && (
          <ImageButton onClick={this.loadMore}>Load More</ImageButton>
        )}

        {selectedImage && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImage} alt="Large view" />
          </Modal>
        )}
      </>
    );
  }
}