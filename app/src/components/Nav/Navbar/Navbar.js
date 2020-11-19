import React from 'react'
import classes from './Navbar.module.css'
import NavItems from '../NavItems/NavItems'


const navbar = props => (
  <header className={`${classes.Toolbar} ${props.navBackground ? classes.withBackground : null}`}>
    <div>🍔</div>
    <nav>
      <NavItems/>
    </nav>
  </header>
);

export default navbar
