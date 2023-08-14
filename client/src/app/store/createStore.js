import { combineReducers, configureStore } from '@reduxjs/toolkit'
import qualitiesReducer from './qualities'
import furnitursReducer from './furniturs'
import usersReducer from './users'

const rootReducers = combineReducers({
  qualities: qualitiesReducer,
  furniturs: furnitursReducer,
  users: usersReducer,
})

export function createStore() {
  return configureStore({
    reducer: rootReducers,
  })
}
