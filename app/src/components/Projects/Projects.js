import React from 'react';
import classes from './Projects.module.css'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectGrid from './ProjectGrid/ProjectGrid'

const projects = props => {

  return (
      <div className={classes.ProjectsSection} ref={props.projectSectionRef}>
        <p className={classes.Heading}>Projects</p>
        <p className={classes.Subheading}> A collection of personal data science & software development projects</p>
          <ProjectGrid/>
          <div className={classes.PageBreak}/>
          <ProjectItem/>
      </div>
  )
}

export default projects