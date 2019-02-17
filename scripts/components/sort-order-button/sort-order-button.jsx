import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent as F } from 'react-fela';

import { SortOrders } from '../../actions';
import { rootStyle, arrowStyle } from './sort-order-button.style';

const SortOrderButton = ({ sortOrder, onClick }) => {
  const arrow = (symbol, text) => (
    <span role="img" aria-label={text} style={arrowStyle}>
      {symbol}
    </span>
  );

  const ascending = sortOrder === SortOrders.ASCENDING;

  return (
    <F style={rootStyle}>
      <button type="button" onClick={onClick}>
        Title&nbsp;
        {ascending ? arrow('⬆', 'Ascending') : arrow('⬇', 'Descending')}
      </button>
    </F>
  );
};

SortOrderButton.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SortOrderButton;
