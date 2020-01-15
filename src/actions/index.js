import { SEARCH_BY_ADDRESS } from './types'

export const searchByAddress = data => async dispatch => {
  return {
    type: SEARCH_BY_ADDRESS,
    payload: {},
  }
}
