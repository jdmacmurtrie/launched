import React from 'react'

const Project = props => {
  return(
    <div>
      <img src={props.screenshot}/>
      <h2 className="project-title">{props.title}</h2>
      <a href={props.url}>{props.url}</a>
      <p className="project-description">{props.description}</p>
      <p className="project-likes">Likes: {props.likeCount}</p>
    </div>
  )
}

export default Project
