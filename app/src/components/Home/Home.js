import React from 'react';
import classes from './Home.module.css'
import projectClasses from '../../App.module.css'

import Aux from '../../hoc/Aux'
import Typer from '../../containers/Typer/Typer'
import Cv from '../../assets/files/cv.pdf'

const Home = () => {

  const executeScroll = () => {
    document.querySelector("#projectGridScroll").scrollIntoView(
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
        className={`${classes.Subheading} ${classes.FadeIn} ${projectClasses.Clickable}`}
        onClick={executeScroll}> projects
        </p>
        <a
            className={`${classes.Subheading} ${classes.FadeIn} ${projectClasses.Clickable}`}
            href={ Cv } target="_blank"> cv
        </a>
        </div>
      </div>
    </Aux>
  )
}

export default Home