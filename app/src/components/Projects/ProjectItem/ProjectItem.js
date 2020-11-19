import React from 'react';
import classes from './ProjectItem.module.css'

import graphImage from '../../../assets/images/projects/tcv_1.png'

const projectItem = () => (
  <div className={classes.ProjectItemWrapper}>
    <div className={classes.ProjectItem}>
      <h1> The Classic Valuer </h1>
      <p>Links and logos</p>
      <img src={graphImage} alt="The Classic Valuer"></img>
      <ul>
        <li>Python: Scrapy, Selenium, OOP</li>
        <li>Docker</li>
        <li>AWS: NoSQL</li>
      </ul>
      <p>
        The Classic Valuer is an auction aggregator for classic car lovers. 
        We collate historic price data for classic cars, aggregate and analyse
        the data to provide insight to users.
      </p>
      <p>
        The data collection engine is built using Python, using libraries such
        as <a href="https://scrapy.org/"> Scrapy </a> and <a href="https://www.selenium.dev/">Selenium</a>,
        combined with custom middlewares.
      </p>
      <p>
        The Classic Valuer stack also includes use of Docker for deployment, 
        and AWS DynamoDB for a highly available data store.
      </p>
      <h3> Stats </h3>
      <p> X cars, X value, X models </p>
      <p> Can I get users? </p>
    </div>
  </div>  
);

export default projectItem