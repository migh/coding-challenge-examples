import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';

import App from './components/app';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
const renderer = createRenderer();
const HotRootComponent = hot(module)(App);

ReactDOM.render(
  <Provider store={store}>
    <RendererProvider renderer={renderer}>
      <HotRootComponent />
    </RendererProvider>
  </Provider>,
  document.getElementById('root')
);
