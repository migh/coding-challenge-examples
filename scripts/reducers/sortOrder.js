import { SortOrders } from '../actions';

const sortOrder = (state = SortOrders.ASCENDING, action) => {
  const { ASCENDING, DESCENDING } = SortOrders;

  switch (action.type) {
    case 'TOGGLE_SORT_ORDER':
      return state === ASCENDING ? DESCENDING : ASCENDING;
    default:
      return state;
  }
};

export default sortOrder;
