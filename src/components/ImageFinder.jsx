import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class ImageFinder extends Component {
  state = {
    id: 1,
  };

  // submit
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    this.setState({ searchText: text });
    console.log(text);
  };
  render() {
    console.log(this.state.searchText)
    return (
      <div>
        <Searchbar callback={this.handleSubmit} />
      </div>
    );
  }
}

export default ImageFinder;
