import 'es6-promise/auto'
import 'isomorphic-fetch'
import {
  SEARCH_BY_ADDRESS,
  SET_IS_LOADING,
  SET_POSITION,
  GET_ADDRESS_POC,
  GET_CATEGORIES,
  GET_PRODUCTS,
} from './types'
import { querySearch } from '../queries/search'
import { queryCategories, queryProducts } from '../queries/products'

export const searchByAddress = address => async dispatch => {
  let success = true
  const result = await fetch(
    `https://dev.virtualearth.net/REST/v1/Locations?addressLine=${address}&key=Aq5yO8KfdY18fKI_FBmHZg5dCZRKqVt3MVG9cBwYPQEF7-J9DBQTL1Dj3x0H_rJ4&CountryRegion=BR`,
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

export const getAddressPoc = ({
  lat = '-23.632919',
  long = '-46.699453',
} = {}) => async dispatch => {
  const variables = {
    algorithm: 'NEAREST',
    lat,
    long,
    now: new Date().toISOString(),
  }

  const result = await fetch(
    'https://api.code-challenge.ze.delivery/public/graphql',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: querySearch, variables }),
    },
  ).then(res => res.json())
  dispatch({
    type: GET_ADDRESS_POC,
    payload: result.data,
  })
}

export const getCategories = () => async dispatch => {
  const result = await fetch(
    'https://api.code-challenge.ze.delivery/public/graphql',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: queryCategories }),
    },
  ).then(res => res.json())
  dispatch({
    type: GET_CATEGORIES,
    payload: result.data,
  })
}

export const getProducts = ({
  search = '',
  categoryId = 0,
  id = 532,
} = {}) => async dispatch => {
  const variables = {
    id,
    search,
    categoryId: parseInt(categoryId, 10),
  }

  const result = await fetch(
    'https://api.code-challenge.ze.delivery/public/graphql',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: queryProducts, variables }),
    },
  ).then(res => res.json())
  dispatch({
    type: GET_PRODUCTS,
    payload: result.data,
  })
}
