import React from 'react'
import classes from './Navbar.module.css'
import NavItems from '../NavItems/NavItems'


const navbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <nav>
      <NavItems/>
    </nav>
  </header>
);

export default navbar
