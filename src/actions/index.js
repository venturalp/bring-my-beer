import 'es6-promise/auto'
import 'isomorphic-fetch'
import { SEARCH_BY_ADDRESS, SET_IS_LOADING, SET_POSITION } from './types'

export const searchByAddress = address => async dispatch => {
  let success = true
  const result = await fetch(
    `http://dev.virtualearth.net/REST/v1/Locations?addressLine=${address}&key=Aq5yO8KfdY18fKI_FBmHZg5dCZRKqVt3MVG9cBwYPQEF7-J9DBQTL1Dj3x0H_rJ4&CountryRegion=BR`,
  ).then(function(response) {
    if (response.status >= 400) {
      success = false
    }
    return response.json()
  })

  dispatch({
    type: SEARCH_BY_ADDRESS,
    payload: {
      addressResults: { ...result },
      success,
    },
  })
}

export const setIsLoading = value => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    payload: value,
  })
}

export const setPosition = value => dispatch => {
  dispatch({
    type: SET_POSITION,
    payload: value,
  })
}
