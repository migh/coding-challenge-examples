const pagination = (state = { page: 1, images: [], isFetching: false }, action) => {
  switch (action.type) {
    case 'REQUEST_IMAGES':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_IMAGES':
      return {
        ...state,
        isFetching: false,
        images: action.images,
        page: action.page
      };
    default:
      return state;
  }
};

export default pagination;
