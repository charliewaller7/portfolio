import React from 'react';
import classes from './ProjectItem.module.css'
import WebIcon from '../Icons/WebIcon'
import Tags from '../Icons/Tags'
import tcvImage from '../../../assets/images/projects/tcv_1.png'

const ProjectTheClassicValuer = () => (
  <div className={classes.ProjectItemWrapper}>
    <div className={classes.ProjectItem}>
      <p className={`${classes.Heading} ${classes.Center}`}> The Classic Valuer </p>
      <span className={classes.Center}>
        <WebIcon href="https://www.theclassicvaluer.com/"/>
        <Tags>
        Python|Web Scraping|Docker|NoSQL|AWS
        </Tags>
      </span>
      <h2> What and Why? </h2>
        <p>
        Wondering what price to pay for a 1973 Porsche 911? Or which models will give you the best 
        return over the next 5 years? <span className={classes.Highlighted}>The Classic Valuer</span> is an 
        auction aggregator for classic car lovers.
        </p>
        <p>
        We collate historic price data for classic cars, crunch the numbers 
        and provide insight to users.
        </p>
        <div className={`${classes.Video} ${classes.Center}`}>
        <video width="480" height="320" controls="controls" poster={tcvImage}>
          <source 
          src="https://video.wixstatic.com/video/115a18_b24900d1781549798e883576e65fd471/1080p/mp4/file.mp4" 
          type="video/mp4"
          />
        </video>
        </div>
      <p>
        The data ingestion backend is written in Python, using the <a href="https://scrapy.org/" className={classes.Link}>
        Scrapy</a> Web Scraping framework, combined with <a href="https://www.selenium.dev/" className={classes.Link}>
        Selenium</a> and custom middleware modules.
      </p>
      <p>
        The Classic Valuer stack also includes use of <a href="https://www.docker.com/" className={classes.Link}>Docker</a> for deployment, 
        and <a href="https://aws.amazon.com/dynamodb/" className={classes.Link}>AWS DynamoDB</a> for a highly available data store.
      </p>
      <h2> Stats </h2>
      <p> 
        The Classic Valuer has historical price data for over <span className={classes.Highlighted}>50,000 car listings</span>, 
        over <span className={classes.Highlighted}>3,000 unique models</span>, 
        with a total value of over <span className={classes.Highlighted}>£4,000,000,000</span>
      </p>
    </div>
  </div>  
);

export default ProjectTheClassicValuer