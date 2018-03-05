import React from 'react'
import Project from '../components/Project'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('api/v1/projects')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ projects: body.projects })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let projects = this.state.projects.map(project => {
      return(
        <Project
          key = {project.id}
          id = {project.id}
          title = {project.title}
          url = {project.url}
          description = {project.description}
          screenshot = {project.screenshot}
          project_type = {project.project_type}
          likeCount = {project.likes}
          />
        )
      })
    return(
      <div className="container la-grid-container">
        {projects}
      </div>
    )
  }
}

export default App
