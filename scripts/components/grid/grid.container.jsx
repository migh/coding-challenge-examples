import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPage } from '../../actions';
import Grid from './grid';

class GridContainer extends Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    paginate: PropTypes.shape({
      page: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.object),
      isFetching: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    const { loadPage: load } = this.props;
    load();
  }

  render() {
    const { sortOrder, paginate } = this.props;
    return <Grid sortOrder={sortOrder} {...paginate} />;
  }
}

const mapStateToProps = state => ({
  sortOrder: state.sortOrder,
  paginate: state.paginate
});

export default connect(
  mapStateToProps,
  { loadPage }
)(GridContainer);
