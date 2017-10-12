import React from 'react'
import FormField from '../components/FormField'
import { browserHistory } from 'react-router'

class FormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      screenshot: '',
      description: '',
      projectType: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleScreenshotChange = this.handleScreenshotChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleProjectTypeChange = this.handleProjectTypeChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewProject = this.addNewProject.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value })
  }

  handleScreenshotChange(event) {
    this.setState({ screenshot: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleProjectTypeChange(event) {
    this.setState({ projectType: event.target.value })
  }

  addNewProject(formPayload) {
    fetch('/api/v1/admin/projects', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let formPayload = {
      title: this.state.title,
      url: this.state.url,
      screenshot: this.state.screenshot,
      description: this.state.description,
      project_type: this.state.projectType
    }

    this.addNewProject(formPayload);
    this.handleClearForm();
    browserHistory.push('/')
  }

  handleClearForm() {
    this.setState({
      title: '',
      url: '',
      screenshot: '',
      description: '',
      projectType: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <FormField
          value={this.state.title}
          label="Project Title"
          name="title"
          handleChange={this.handleTitleChange}
        />
        <FormField
          value={this.state.url}
          label="URL"
          name="url"
          handleChange={this.handleUrlChange}
        />
        <FormField
          value={this.state.screenshot}
          label="Screenshot"
          name="screenshot"
          handleChange={this.handleScreenshotChange}
        />
        <FormField
          value={this.state.description}
          label="Project Description"
          name="description"
          handleChange={this.handleDescriptionChange}
        />
        <FormField
          value={this.state.projectType}
          label="Project Type"
          name="projectType"
          handleChange={this.handleProjectTypeChange}
        />
        <button type="submit">Add that shit</button>
      </form>
    )
  }
}

export default FormContainer
