import React from 'react'
import classes from './ProjectGrid.module.css'
import ProjectGridItem from './ProjectGridItem/ProjectGridItem'

import tcvImage from '../../../assets/images/projects/tcv_1.png'
import linkHubImg from '../../../assets/images/projects/link_hub_1.png'

const ProjectGrid = () => (
  <div className={classes.GridWrapper}>
  <div className={classes.GridArea}>
    <ProjectGridItem src={tcvImage} name="The Classic Valuer" id="projectTheClassicValuer"/>
    <ProjectGridItem src={linkHubImg} name="Link Hub" id="projectLinkHub"/>
  </div>
</div>
);

export default ProjectGrid