import React from 'react';
import classes from './Icons.module.css'

const Tags = props => {

  var tags = props.children.split("|")

  return (
    <div className={classes.Tags}>
    {tags.map((tag) => 
      <span># {tag}</span>
    )}
    </div>
  );
};

export default Tags