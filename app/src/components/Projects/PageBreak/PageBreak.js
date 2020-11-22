import React from 'react';
import classes from './PageBreak.module.css';
import Aux from '../../../hoc/Aux';

const PageBreak = () => (
  <Aux>
    <div className={classes.PageBreak}></div>
    <span id="projectItemScroll"></span>
  </Aux>
);

export default PageBreak