import { CountryReducerState, CountryActions, GET_COUNTRIES } from '../../types'

const initState: CountryReducerState = {
  countries: [],
}

export default function countryReducer(
  state: CountryReducerState = initState,
  action: CountryActions
) {
  switch (action.type) {
  case GET_COUNTRIES:
    return {
      ...state,
      countries: action.payload,
    }
  default:
    return state
  }
}
