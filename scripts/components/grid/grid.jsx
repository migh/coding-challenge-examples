import React from 'react';
import PropTypes from 'prop-types';

import { SortOrders } from '../../actions';
import {
  rootStyle,
  cardStyle,
  cardTitleStyle,
  imageHolderStyle,
  titleHolderStyle
} from './grid.style';

const imageToCard = img => (
  <div key={img.id} style={cardStyle}>
    <a href={img.url}>
      <img alt={img.title} title={img.title} src={img.thumbnailUrl} />
    </a>
    <div style={cardTitleStyle}>{img.title}</div>
  </div>
);

const Grid = ({ sortOrder, images, isFetching }) => {
  let cards = new Array(9)
    .fill(
      <div style={cardStyle}>
        <div style={imageHolderStyle} />
        <div style={titleHolderStyle} />
      </div>
    )
    .map((card, i) => ({
      ...card,
      key: i
    }));

  if (!isFetching) {
    cards =
      sortOrder === SortOrders.ASCENDING
        ? images.map(imageToCard)
        : images.map(imageToCard).reverse();
  }

  return <div style={rootStyle}>{cards}</div>;
};

Grid.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Grid;
