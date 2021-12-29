// // Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// A Cart
export type FavouriteCountry = {}

// types
export type FavouriteReducerState = {
  favourite: FavouriteCountry[]
}

// action types
export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: FavouriteCountry
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: FavouriteCountry
}

// Use this union in reducer
export type FavouriteActions = AddCountryAction | RemoveCountryAction
