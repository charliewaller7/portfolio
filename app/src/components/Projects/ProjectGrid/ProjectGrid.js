import React from 'react'
import classes from './ProjectGrid.module.css'
import ProjectGridItem from './ProjectGridItem/ProjectGridItem'

import tcvImage from '../../../assets/images/projects/tcv_1.png'

const ProjectGrid = () => (
  <div className={classes.GridWrapper}>
  <div className={classes.GridArea}>
    <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
  </div>
</div>
);



export default ProjectGrid