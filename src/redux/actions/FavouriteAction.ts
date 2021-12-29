import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  FavouriteActions,
  FavouriteCountry,
} from '../../types'

// Add Country to cart

export function addCountry(country: FavouriteCountry): FavouriteActions {
  return {
    type: ADD_COUNTRY,
    payload: country,
  }
}

export function removeCountry(country: FavouriteCountry): FavouriteActions {
  return {
    type: REMOVE_COUNTRY,
    payload: country,
  }
}
