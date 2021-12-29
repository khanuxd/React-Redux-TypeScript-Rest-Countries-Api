import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  FavouriteReducerState,
  FavouriteActions,
} from '../../types'

// Getting data from localstorage
const localStorageFavourite = localStorage.getItem('favourite')
let initFavourite: [] = []
if (localStorageFavourite) {
  initFavourite = JSON.parse(localStorageFavourite)
}

const initState: FavouriteReducerState = {
  favourite: initFavourite,
}

export default function favouriteReducer(
  state = initState,
  action: FavouriteActions
) {
  switch (action.type) {
  case ADD_COUNTRY: {
    const country = action.payload
    const favouriteCountries = [...state.favourite, country]
    localStorage.setItem('favourite', JSON.stringify(favouriteCountries)) // saving data to local storage
    return {
      ...state,
      favourite: [...state.favourite, country],
    }
  }
  case REMOVE_COUNTRY: {
    const countryToRemove = action.payload
    const filteredCountry = state.favourite.filter(
      (country: any) => country !== countryToRemove
    )
    localStorage.setItem('favourite', JSON.stringify([...filteredCountry]))
    return {
      ...state,
      favourite: [...filteredCountry],
    }
  }

  default:
    return state
  }
}
