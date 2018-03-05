import React from 'react'

const emoji = require("emoji-dictionary");

const Project = props => {
  return(
    <div className="la-project-card-container">
      <div className="row">
        <div className="three columns">
          <img className="la-project-image" src={props.screenshot}/>
        </div>
        <div className="six columns">
          <h2 className="la-project-title">{props.title}</h2>
          <a href={props.url} target="_blank">{props.url}</a>
          <h4 className="la-project-description">{props.description}</h4>
        </div>
        <div className="three columns">
          <div className="la-project-likes">
            <h4 >
              {emoji.getUnicode("heart_eyes")} {props.likeCount}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
