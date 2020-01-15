import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import generalReducer from '../reducers'

const reducers = combineReducers({
  generalReducer,
})

const composeEnhancer =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

export default initialState =>
  createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunkMiddleware)),
  )
