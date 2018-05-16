import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import listings from './reducers/Listings'
import profile from './reducers/Profile'
import wallet from './reducers/Wallet'
import alert from './reducers/Alert'
import users from './reducers/Users'

let middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({
    listings,
    profile,
    wallet,
    alert,
    users,
  }),
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

export default store
