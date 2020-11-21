import React from 'react'
import classes from './ProjectGridItem.module.css'

const ProjectGridItem = props => (
  <div className={classes.GridItem}>
    <img src={props.src} alt={props.name}/>
    <p>{props.name}</p>
  </div>
);

export default ProjectGridItem