import { combineReducers } from 'redux'
import countryReducer from './CountryReducers'
import favouriteReducer from './FavouriteReducer'

const createRootReducer = () =>
  combineReducers({
    countryReducer,
    favouriteReducer,
  })

export default createRootReducer
