import React from 'react';
import classes from './ProjectCarousel.module.css'
import ProjectItem from './../ProjectItem/ProjectItem'

const projectCarousel = () => (
  <div className={classes.Carousel}>
    <div className={classes.Left}>
      <ProjectItem/>
    </div>
    <div className={classes.Centre}>
      <ProjectItem/>
    </div>
    <div className={classes.Right}>
      <ProjectItem/>
    </div>
  </div>
);

export default projectCarousel