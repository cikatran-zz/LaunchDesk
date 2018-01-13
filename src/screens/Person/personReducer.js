import * as actionTypes from './actionTypes';
const initialState = {
  data: null,
  fetched: false,
  isFetching: false,
  error: false,
};

export default function personReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PERSON:
      return {
        ...state,
        data: null,
        isFetching: true
      };
    case actionTypes.GET_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        data: action.data
      };
    case actionTypes.GET_PERSON_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        errorMessage: action.errorMessage
      };
    default:
      return state
  }
};