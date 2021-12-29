// Need to fetch countries using redux-thunk
/* import { Dispatch } from 'redux'
import axios from 'axios' */

import { GET_COUNTRIES, GET_COUNTRIES_SAGA, CountryActions } from '../../types'

// fetch All Countries
export function getCountries(countries: []): CountryActions {
  return {
    type: GET_COUNTRIES,
    payload: countries,
  }
}

export function getCountriesSaga() {
  return {
    type: GET_COUNTRIES_SAGA,
  }
}

// Async action processed by redux-thunk middleware
/* export function getAllCountries() {
  return async (dispatch: Dispatch) => {
    const countryResopnse = await axios.get('https://restcountries.com/v2/all')
    const countries = await countryResopnse.data
    dispatch(getCountries(countries))
  }
} */
