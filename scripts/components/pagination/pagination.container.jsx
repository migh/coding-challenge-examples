import { connect } from 'react-redux';

import { setPage } from '../../actions';
import Pagination from './pagination';

const mapStateToProps = state => ({
  page: state.paginate.page,
  start: 1,
  length: 5
});

const mapDispatchToProps = dispatch => ({
  setPage: pageNumber => {
    setPage(dispatch, pageNumber);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
