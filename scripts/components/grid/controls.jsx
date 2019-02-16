import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ start, length }) => {
  const controlsStyle = {
    fontFamily:
      '"Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", Times, Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort'
  };
  const pages = new Array(length).fill('').map((_, i) => `${start + i}`);

  return (
    <div style={controlsStyle}>
      <span role="img" aria-label="First">
        ⏪
      </span>
      <span role="img" aria-label="Previous">
        ◀
      </span>
      {pages.map(page => (
        <span>{page}</span>
      ))}
      <span role="img" aria-label="Next">
        ▶
      </span>
      <span role="img" aria-label="Last">
        ⏩
      </span>
    </div>
  );
};

Controls.propTypes = {
  start: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};

export default Controls;
