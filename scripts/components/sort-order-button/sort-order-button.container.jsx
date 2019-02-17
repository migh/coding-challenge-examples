import { connect } from 'react-redux';

import { toggleSortOrder } from '../../actions';
import OrderButton from './sort-order-button';

const mapStateToProps = state => ({
  sortOrder: state.sortOrder
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggleSortOrder())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton);
