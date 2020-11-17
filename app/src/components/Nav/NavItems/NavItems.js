import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem/>
    <NavItem/>
    <NavItem/>
  </ul>
);

export default NavItems