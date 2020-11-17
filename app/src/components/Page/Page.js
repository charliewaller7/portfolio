// Layout component
import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Page.module.css'
import Navbar from '../Nav/Navbar/Navbar'

const page = props => (
  <Aux>
    <Navbar/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default page;