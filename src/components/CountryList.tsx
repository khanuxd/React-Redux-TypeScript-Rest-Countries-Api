import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountriesSaga, addCountry } from '../redux/actions'
// import { getAllCountries, addCountry } from '../redux/actions'

import CountryCard from './CountryCard'
import { AppState } from '../types'
import Search from './Search'

const CountryList = () => {
  const [keyword, setKeyword] = useState('')

  const countriesList = useSelector(
    (state: AppState) => state.countryReducer.countries
  )
  const favourite = useSelector(
    (state: AppState) => state.favouriteReducer.favourite
  )

  const handleChange = (e: any) => {
    let keyword = e.target.value
    setKeyword(keyword)
  }

  const filteredCountries = countriesList.filter((country) =>
    country.name.toLowerCase().includes(keyword.toLowerCase())
  )

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllCountries())
    dispatch(getCountriesSaga())
  }, [dispatch])

  return (
    <div className="country-list">
      <div className="country-list--search">
        <Search keyword={keyword} onChange={handleChange} />
      </div>
      {filteredCountries &&
        filteredCountries.map((country: any) => (
          <CountryCard
            key={country.name}
            {...country}
            onClick={() => dispatch(addCountry(country))}
            disabled={favourite.includes(country)}
          />
        ))}
    </div>
  )
}

export default CountryList
