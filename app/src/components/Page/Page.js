// Layout component
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Page.module.css'
import Navbar from '../Nav/Navbar/Navbar'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'


class Page extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navBackground: false,
      navTitle: ""
    }
  }

  componentDidMount() {
    this.projectsListener = document.addEventListener("scroll", e => {

      // Get scroll value from projects section
      // and current position
      var projectOffset = document.querySelector('[class*=Projects_Subheading]').offsetTop
      var scrolled = document.scrollingElement.scrollTop;
  
      // Check if user is scrolled past point
      this.setState({
        navBackground: scrolled >= projectOffset,
        navTitle: scrolled >= projectOffset ? "Projects" : ""
      })
      });
  };

  render() {
    return (
    <Aux>
      <Navbar navBackground={this.state.navBackground}>{this.state.navTitle}</Navbar>
      <main className={classes.Content}>
        <Home/>
        <Projects/>
      </main>
    </Aux>
    );
  };
};

export default Page;