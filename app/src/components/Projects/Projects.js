import React from 'react';
import classes from './Projects.module.css'
import ProjectCarousel from './ProjectCarousel/ProjectCarousel'

const projects = props => {

  return (
      <div 
      className={classes.ProjectsSection} 
      ref={props.projectSectionRef}>
      <p className={classes.Heading}>Projects</p>
      <ProjectCarousel/>
      </div>
  )
}

export default projects