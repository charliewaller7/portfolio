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
    this.projectSectionRef = React.createRef()
    this.state = {
      navBackground: false
    }
  }



  componentDidMount() {
    this.projectsListener = document.addEventListener("scroll", e => {

      // Get scroll value from projects section
      // and current position
      var projectOffset = document.querySelector('[class*=ProjectCarousel_Carousel]').offsetTop
      var scrolled = document.scrollingElement.scrollTop;
  
      // Check if user is scrolled past point
      this.setState({navBackground: scrolled >= projectOffset})
      });
  };

  render() {
    return (
    <Aux>
      <Navbar navBackground={this.state.navBackground}/>
      <main className={classes.Content}>
        <Home projectSectionRef={this.projectSectionRef}/>
        <p>{this.state.navBackground ? "Yes" : "No"}</p>
        <Projects projectSectionRef={this.projectSectionRef} id="projects"/>
      </main>
    </Aux>
    );
  };
};

export default Page;