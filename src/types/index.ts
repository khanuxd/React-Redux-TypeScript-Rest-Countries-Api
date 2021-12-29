import { CountryReducerState } from './CountryTypes'
import { FavouriteReducerState } from './FavouriteTypes'
export * from './CountryTypes'
export * from './FavouriteTypes'

export type AppState = {
  countryReducer: CountryReducerState
  favouriteReducer: FavouriteReducerState
}
