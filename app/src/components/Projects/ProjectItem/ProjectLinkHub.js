import React from 'react';
import classes from './ProjectItem.module.css'
import WebIcon from '../Icons/WebIcon'
import Tags from '../Icons/Tags'
import linkHubImg from '../../../assets/images/projects/link_hub_1.png'

const ProjectLinkHub = props => (
  <div className={classes.ProjectItemWrapper} id={props.id}>
    <div className={classes.ProjectItem}>
      <p className={`${classes.Heading} ${classes.Center}`}> Link hub </p>
      <span className={classes.Center}>
      <WebIcon href="https://github.com/charliewaller7/link-hub"/>
        <Tags>
        Golang|CLI
        </Tags>
      </span>
      <h2> What and Why? </h2>
        <p>
        Ever tried to replicate a prod environment locally with Docker? 
        Or debugged a K8s cluster by portforwarding to web services like Grafana? 
        </p>
        <p>
        Local dev environments can get annoying to manage. This (very) simple tool provides a UI to link multiple URLs together.
        For example, maybe you've got a local Elasticsearch cluster running on <span className={classes.Highlighted}>localhost:9200</span>. 
        you've portfowarded to a Kibana instance running on AWS at <span className={classes.Highlighted}>localhost:5601</span>, 
        and you've portforwarded to a grafana dashboard running in GCP on <span className={classes.Highlighted}>localhost:3000</span>
        Link hub pulls all these services into one view.
        </p>
        <p>
        Built as a single Golang binary, Link hub is built to be integrated into build / test pipelines and debugging processes, 
        <br/><span className={classes.Highlighted}>/linkhub -file config.yaml</span>
        </p>
        <div className={`${classes.Img} ${classes.Center}`}>
        <img src={linkHubImg} alt="Link hub UI"></img>
        </div>
      <p>
        Clone it and run it yourself <a href="https://github.com/charliewaller7/link-hub" className={classes.Link} target="_blank" rel="noreferrer">
        Link hub - github.com</a>
      </p>

    </div>
  </div>  
);

export default ProjectLinkHub