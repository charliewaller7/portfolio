import React from 'react';
import classes from './Icons.module.css'
import webIconImage from '../../../assets/images/web_icon.png'

const WebIcon = props => (
  <div className={classes.WebIcon}>
    <a href={props.href} target="_blank" rel="noreferrer">
      <img src={webIconImage} alt="website"></img>
    </a>
  </div>
);
export default WebIcon