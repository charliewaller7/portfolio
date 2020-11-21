import React, {Component} from 'react'
import classes from './ProjectGrid.module.css'
import ProjectGridItem from './ProjectGridItem/ProjectGridItem'

import tcvImage from '../../../assets/images/projects/tcv_1.png'

class ProjectGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: null
    }
  }

  executeScroll = ref => {
    ref.current.scrollIntoView(
      {behavior: "smooth"}
    ) 
  }

  render () {
    return (
      <div className={classes.GridWrapper}>
        <div className={classes.GridArea}>
          <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
          <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
          <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
          <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
          <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
          <ProjectGridItem src={tcvImage} name="The Classic Valuer"/>
        </div>
      </div>
    );
  };
}


export default ProjectGrid