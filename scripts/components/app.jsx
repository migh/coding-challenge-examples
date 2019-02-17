import React from 'react';
import { FelaComponent as F } from 'react-fela';

import appStyle from './app.style';
import SortButton from './sort-order-button/sort-order-button.container';
import GridContainer from './grid/grid.container';
import PaginationContainer from './pagination/pagination.container';

// Here we don't have state but fella changes inline style to classes.
const App = () => (
  <F style={appStyle}>
    <header>
      <SortButton />
    </header>
    <main>
      <GridContainer />
    </main>
    <footer>
      <PaginationContainer />
    </footer>
  </F>
);

export default App;
