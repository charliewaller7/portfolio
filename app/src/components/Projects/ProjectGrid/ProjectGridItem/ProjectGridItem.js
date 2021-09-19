import React from 'react'
import classes from './ProjectGridItem.module.css'


const ProjectGridItem = props => {

  const executeScroll = id => {
    document.querySelector('#' + id).scrollIntoView({
      behavior: "smooth"
    }) 
  }

  return (
    <div className={classes.GridItem} onClick={() => executeScroll(props.id)}>
      <img src={props.src} alt={props.name}/>
      <p>{props.name}</p>
    </div>
  )
};

export default ProjectGridItem