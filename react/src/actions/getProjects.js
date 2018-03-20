export const GET_PROJECTS = "GET_PROJECTS"
export const GET_PROJECTS_REQUEST_SUCCESS = "GET_PROJECTS_REQUEST_SUCCESS";
export const GET_PROJECTS_REQUEST_FAILURE = "GET_PROJECTS_REQUEST_FAILURE";

let getProjectsRequestSuccess = (projects) => {
  return {
    type: GET_PROJECTS_REQUEST_SUCCESS,
    projects
  };
};

let getProjectsRequestFailure = (error) => {
  return {
    type: GET_PROJECTS_REQUEST_FAILURE,
    error
  };
};

function getProjects() {
  return function (dispatch) {
    fetch('api/v1/projects', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok) {
        return response.json();
      } else {
        let error = new Error(`getProjects: ${status} (${statusText})`);
        throw(error);
      }
    })
    .then(
      response => dispatch(getProjectsRequestSuccess(response)),
      error =>  dispatch(getProjectsRequestFailure(error))
    )
  }
}

export { getProjects };
