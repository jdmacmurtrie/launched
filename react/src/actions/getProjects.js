export const GET_PROJECTS = "GET_PROJECTS"
export const GET_PROJECTS_REQUEST_SUCCESS = "GET_PROJECTS_REQUEST_SUCCESS";
export const GET_PROJECTS_REQUEST_FAILURE = "GET_PROJECTS_REQUEST_FAILURE";

let getProjectsRequestSuccess = projects => {
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


export function getProjects() {
  //  https://github.com/gaearon/redux-thunk/issues/146
  return function action(dispatch) {
    dispatch({ type: GET_PROJECTS })

    const request = fetch('api/v1/projects', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok) {
        debugger
        return response.json();
      } else {
        let error = new Error(`getProjects: ${status} (${statusText})`);
        throw(error);
      }
    })

    return request.then(
      response => dispatch(getProjectsRequestSuccess(response))
    )
    .catch((err) => {
      dispatch(getProjectsRequestFailure(err))
    })
  }
}

// export default getProjects

// let getProjects = () => dispatch => {
//   dispatch(getProjectsRequest())
//
//   return fetchProjects()
//     .then((responseData) => {
//       dispatch(getProjectsRequestSuccess(responseData))
//     })
//     .catch(() => dispatch(getProjectsRequestFailure()))
// };
//
//
// let fetchProjects = () => {
//   return fetch(`${horizonUrl}/api/v1/admin/cohort_data.json`, {
//     credentials: 'same-origin',
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   })
//   .then(response => {
//     let { ok, status, statusText } = response;
//     if (ok) {
//       return response.json();
//     } else {
//       let error = new Error(`fetchProjects: ${status} (${statusText})`);
//       throw(error);
//     }
//   })
// }
//
// export { getProjects, fetchProjects };
