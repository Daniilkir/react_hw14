import React, { Component } from 'react';
import { Searchbars, SearchForm, SearchFormbutton, SearchFormlabel, SearchForminput } from './Searchbar.js';

export class Searchbar extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.imgName.value;
    this.props.onSubmit(inputValue);
    event.currentTarget.reset();
  };

  render() {
    return (
      <Searchbars className="searchbar">
        <SearchForm onSubmit={this.onSubmit} className="form">
          <SearchFormbutton type="submit" className="button">
            <SearchFormlabel className="button-label">Search</SearchFormlabel>
          </SearchFormbutton>

          <SearchForminput
            className="input"
            type="text"
            autoComplete="off"
            name="imgName"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbars>
    );
  }
}
