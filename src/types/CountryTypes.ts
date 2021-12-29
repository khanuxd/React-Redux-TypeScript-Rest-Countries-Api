// Action types
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_SAGA = 'GET_COUNTRIES_SAGA'

// types
export type CountryReducerState = {
  countries: Country[]
}

// A country
export type Country = {
  name: string
  region: string
  subregion: string
  population: number
  nativeName: string
  flag: string
  capital: string
  languages: Language[]
}

export type Language = {
  name: string
}

export type GetCountriesAction = {
  type: typeof GET_COUNTRIES
  payload: Country[]
}

// Use this union in reducer
export type CountryActions = GetCountriesAction
