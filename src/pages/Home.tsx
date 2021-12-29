import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getAllCountries } from '../redux/actions'
import { getCountriesSaga } from '../redux/actions'

import CountryList from '../components/CountryList'

import Container from '@mui/material/Container'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllCountries())
    dispatch(getCountriesSaga())
  }, [dispatch])

  return (
    <Container maxWidth="xl" className="home">
      <div className="home__country-list">
        <CountryList />
      </div>
    </Container>
  )
}

export default Home
