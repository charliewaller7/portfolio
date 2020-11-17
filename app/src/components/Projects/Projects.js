import React from 'react';
import classes from './Projects.module.css'

const projects = props => {

  return (
      <div 
      className={classes.ProjectsSection} 
      ref={props.projectSectionRef}>
      <p className={classes.Heading}>Projects</p>
      </div>
  )
}

export default projects