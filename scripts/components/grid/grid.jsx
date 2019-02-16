import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Grid = ({ source }) => {
  if (!source) {
    return null;
  }

  const style = {
    width: '80%',
    height: '80vh',
    margin: '0 auto',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: '33.33% 33.33% 33.33%',
    gridTemplateRows: '33.33% 33.33% 33.33%',
    gridColumnGap: '8px',
    gridRowGap: '8px'
  };

  const cardStyle = {
    backgroundColor: '#6666bb'
  };

  return (
    <Fragment>
      <div>
        <ul>
          <li>2x2</li>
          <li>3x3</li>
          <li>4x4</li>
        </ul>
        <div>
          Title
          <span role="img" aria-label="Up">
            ⬆
          </span>
          <span role="img" aria-label="Down">
            ⬇
          </span>
        </div>
      </div>
      <div style={style}>
        {source.map(img => (
          <div key={img.id} style={cardStyle}>
            <img alt={img.title} title={img.title} src={img.thumbnailUrl} />
            <h2>{img.title}</h2>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Grid.propTypes = {
  source: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Grid;
