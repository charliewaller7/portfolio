import React from 'react';
import classes from './Home.module.css'

import Aux from '../../hoc/Aux'
import Typer from '../../containers/Typer/Typer'

const home = props => {

  return (
    <Aux>
      <div className={classes.HomeSection}>
      <Typer 
        className={classes.Heading}
        dataText={["Welcome...", "Charlie Waller Portfolio"]}
        />
        <p className={`${classes.Subheading} ${classes.FadeIn}`}>
        projects
        </p>
      </div>
    </Aux>
  )
}

export default home