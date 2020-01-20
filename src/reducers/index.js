import {
  SEARCH_BY_ADDRESS,
  SET_IS_LOADING,
  SET_POSITION,
  GET_ADDRESS_POC,
  GET_CATEGORIES,
} from '../actions/types'
import _get from 'lodash/get'

const INITIAL_STATE = {
  position: [],
  isLoading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BY_ADDRESS:
      const results = action.payload.addressResults

      return {
        ...state,
        position: [
          ..._get(
            results,
            'resourceSets[0].resources[0].geocodePoints[0].coordinates',
            [],
          ),
        ],
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      }
    case GET_ADDRESS_POC:
      return {
        ...state,
        addressPoc: _get(action.payload, 'pocSearch[0]', {}),
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: _get(action.payload, 'allCategory', []),
      }
    default:
      return state
  }
}
