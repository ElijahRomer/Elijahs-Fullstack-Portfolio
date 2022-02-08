import React from 'react';

function FeaturedProject(props) {
  return (
    <>
      <h3 key={props.workClass}>{props.title}</h3>
      <a className="repo-link my-1" href={props.repoLink}>
        View GitHub Repository
      </a>
      {props.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <a className={props.workClass + ' rounded-3'} href={props.picLink}></a>
    </>
  );
}

export default FeaturedProject;
