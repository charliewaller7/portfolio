import React, { Component, useRef } from 'react';

import Page from './components/Page/Page'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

class App extends Component {

  constructor(props) {
    super(props)
    this.projectSectionRef = React.createRef()
  }

  render() {
    return (
      <div>
        <Page>
          <Home projectSectionRef={this.projectSectionRef}/>
          <Projects projectSectionRef={this.projectSectionRef}/>
        </Page>
      </div>
    );
  };
};

export default App