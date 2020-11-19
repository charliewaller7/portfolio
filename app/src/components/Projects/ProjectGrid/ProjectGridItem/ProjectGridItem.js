import React from 'react'
import classes from './ProjectGridItem.module.css'
import graphImage from '../../../../assets/images/projects/tcv_1.png'

const ProjectGridItem = () => (
  <span className={classes.GridItem}>
    <img src={graphImage} alt="The Classic Valuer"></img>
  </span>
);

export default ProjectGridItem