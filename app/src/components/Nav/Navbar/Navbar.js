import React from 'react'
import classes from './Navbar.module.css'
import NavItems from '../NavItems/NavItems'


const navbar = props => (
  <header className={classes.Toolbar}>
    <p className={classes.navTitle}>{props.children}</p>
    <div className={`${classes.Toolbar} ${props.navBackground ? classes.navBackground : null}`}>
      <div>{/* Sidebar placeholder */}</div>
      <nav>
        <NavItems/>
      </nav>
    </div>
  </header>
);

export default navbar
