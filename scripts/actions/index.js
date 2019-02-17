const url = page =>
  `https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}&_sort=title&_order=asc`;

export const fetchPage = pageNumber =>
  fetch(url(pageNumber))
    .then(response => response.json())
    .then(data => data.sort((a, b) => a.title - b.title));

export const requestImages = () => ({
  type: 'REQUEST_IMAGES'
});

export const receiveImages = (images, page) => ({
  type: 'RECEIVE_IMAGES',
  images,
  page
});

export const loadPage = () => (dispatch, getState) => {
  const {
    paginate: { page }
  } = getState();

  dispatch(requestImages());
  fetchPage(page).then(images => {
    dispatch(receiveImages(images, page));
  });
};

export const setPage = (dispatch, pageNumber) => {
  dispatch(requestImages());
  fetchPage(pageNumber).then(images => {
    dispatch(receiveImages(images, pageNumber));
  });
};

export const toggleSortOrder = () => ({
  type: 'TOGGLE_SORT_ORDER'
});

export const SortOrders = {
  ASCENDING: 'ASCENDING',
  DESCENDING: 'DESCENDING'
};

export const Request = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};
