import React, { Component } from "react";
import { ImageGalleryItems, Img } from "./ImageGalleryItem.js";

export class ImageGalleryItem extends Component {
  render() {
    const { data, onClick } = this.props;
    
    return (
      <>
      <ImageGalleryItems key={data.id} className="gallery-item" onClick={onClick} >
        <Img
          src={data.webformatURL}
          alt={data.tags}
          width="350px"
          height="350px"
        />
      </ImageGalleryItems>
      </>
    );
  }
}
