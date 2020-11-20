import React, {Component} from 'react'
import classes from './ProjectGrid.module.css'
import ProjectGridItem from './ProjectGridItem/ProjectGridItem'

class ProjectGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: null
    }
  }

  render () {
    return (
      <div className={classes.GridWrapper}>
        <div className={classes.GridArea}>
          <ProjectGridItem/>
          <ProjectGridItem/>
          <ProjectGridItem/>
          <ProjectGridItem/>
          <ProjectGridItem/>
          <ProjectGridItem/>
        </div>
      </div>
    );
  };
}


export default ProjectGrid