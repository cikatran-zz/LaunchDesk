import * as actionTypes from '../actionTypes';

export function getPerson(name) {
  return {
    type: actionTypes.GET_PERSON,
    name
  }
}

export function getPersonSuccess(data) {
  return {
    type: actionTypes.GET_PERSON_SUCCESS,
    data: data
  }
}


export function getPersonFailure(error) {
  return {
    type: actionTypes.GET_PERSON_FAILURE,
    errorMessage: error
  }
}