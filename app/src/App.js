import React, { Component } from 'react';

import Page from './components/Page/Page'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Page>
          <Home />
        </Page>
      </div>
    );
  };
};

export default App