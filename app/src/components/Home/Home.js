import React, { useRef } from 'react';
import classes from './Home.module.css'
import projectClasses from '../../App.module.css'

import Aux from '../../hoc/Aux'
import Typer from '../../containers/Typer/Typer'

const Home = props => {

  const executeScroll = () => {
    props.projectSectionRef.current.scrollIntoView(
      {behavior: "smooth"}
    ) 
  }

  return (
    <Aux>
      <div className={classes.HomeSection}>
      <Typer 
        className={classes.Heading}
        dataText={["Welcome", "Charlie Waller Portfolio"]}
        />
        <div>
        <p 
        className={
          `${classes.Subheading} ${classes.FadeIn} ${projectClasses.Clickable}`
          }
        onClick={executeScroll}>
        projects
        </p>
        </div>
      </div>
    </Aux>
  )
}

export default Home