import React from 'react';
import classes from './Projects.module.css'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectGrid from './ProjectGrid/ProjectGrid'
import PageBreak from './PageBreak/PageBreak'


const Projects = () => (
  <div className={classes.ProjectsSection} id="projectGridScroll">
    <p className={classes.Heading}>Projects</p>
    <p className={classes.Subheading}> A collection of personal data science & software development projects</p>
      <ProjectGrid/>
      <PageBreak/>
      <ProjectItem/>
  </div>
)

export default Projects