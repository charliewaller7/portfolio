import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'

import githubLogo from "../../../assets/images/github_logo_512.png"
import linkedInLogo from "../../../assets/images/linkedin_logo_512.png"

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem href="https://github.com/charliewaller7" alt="Github" src={githubLogo}/>
    <NavItem href="https://www.linkedin.com/in/charlie-waller-20395b105/" alt="LinkedIn" src={linkedInLogo}/>
  </ul>
);

export default NavItems