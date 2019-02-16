import React, { Component } from 'react';
import Grid from './grid';
import Controls from './controls';

const testUrl =
  'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc';

class GridContainer extends Component {
  state = { imageData: [] };

  componentDidMount() {
    fetch(testUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          imageData: data.sort((a, b) => a.title - b.title)
        });
      });
  }

  render() {
    const { imageData } = this.state;

    return (
      <div>
        <Grid source={imageData} />
        <Controls length={5} start={1} />
      </div>
    );
  }
}

export default GridContainer;
