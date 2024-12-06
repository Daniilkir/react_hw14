import "./App.css";
import React, { Component } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";

class App extends Component {
  state = {
    imageName: '',
  };

  handleSearch = (name) => {
    this.setState({ imageName: name });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery imageName={this.state.imageName} />
      </>
    );
  }
}

export default App;
