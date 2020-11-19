import React from 'react';
import classes from './NavItem.module.css'


const navItem = props => (
  <li className={classes.Item}>
    <a href={props.href} target="_blank" rel="noreferrer">
      <img src={props.src} alt={props.alt} height="100%"></img>
    </a>
  </li>
);

export default navItem