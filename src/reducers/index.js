import { SEARCH_BY_ADDRESS } from '../actions/types'

const INITIAL_STATE = {
  addressResults: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BY_ADDRESS:
      return {
        ...state,
        addressResults: [...state.addressResults, action.payload],
      }
    default:
      return state
  }
}
