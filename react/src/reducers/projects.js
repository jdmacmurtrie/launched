import { GET_PROJECTS_REQUEST_SUCCESS } from '../actions/getProjects'
import { GET_PROJECTS_REQUEST_FAILURE } from '../actions/getProjects'

let initialState = {
  projects: []
}

let projects = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        projects: action.projects.projects,
      });
    case GET_PROJECTS_REQUEST_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};

export default projects
