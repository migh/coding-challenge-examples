import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FelaComponent as F } from 'react-fela';

import { rootStyle, buttonStyle, interactiveButtonStyle } from './pagination.style';

class Controls extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
  };

  getClickHandler(page) {
    const { setPage } = this.props;

    return () => {
      setPage(page);
    };
  }

  render() {
    const { start, length, page: currentPage } = this.props;
    const pages = new Array(length).fill('').map((_, i) => `${start + i}`);
    const pageLink = page => (
      <F key={page} active={Number(page) === currentPage} style={interactiveButtonStyle}>
        <button type="button" onClick={this.getClickHandler(Number(page))}>
          {page}
        </button>
      </F>
    );
    const prev = currentPage - 1 || 5;
    const next = (currentPage % length) + 1;

    return (
      <div style={rootStyle}>
        <button type="button" onClick={this.getClickHandler(prev)} style={buttonStyle}>
          ◀
        </button>
        {pages.map(pageLink)}
        <button type="button" onClick={this.getClickHandler(next)} style={buttonStyle}>
          ▶
        </button>
      </div>
    );
  }
}

export default Controls;
