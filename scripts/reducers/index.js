import { combineReducers } from 'redux';
import sortOrder from './sortOrder';
import paginate from './paginate';

export default combineReducers({
  sortOrder,
  paginate
});
