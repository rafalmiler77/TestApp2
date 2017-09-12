import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
// import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import lightboxReducer from './state/reducer'

const reducer = combineReducers({
  storeData: lightboxReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  ),
  // persistState(['counter', 'currentUserData'])
)

const store = createStore(reducer, enhancer);

export default store