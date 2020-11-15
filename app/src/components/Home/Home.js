import React from 'react';
import classes from './Home.module.css'

import Aux from '../../hoc/Aux'
import Typer from '../../containers/Typer/Typer'

const home = props => {
  return (
    <Aux>
      <div className={classes.Heading}>
      <Typer dataText={["Welcome...", "Charlie Waller Portfolio", "Scroll..."]}/>
      </div>
    </Aux>
  )
}

export default home