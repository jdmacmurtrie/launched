import React from 'react'
import Project from '../components/Project'
import { connect } from 'react-redux';
import { getProjects } from '../actions/getProjects'

class App extends React.Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    let projects = this.props.projects.map(project => {
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
      <div>
        {projects}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(getProjects())
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
