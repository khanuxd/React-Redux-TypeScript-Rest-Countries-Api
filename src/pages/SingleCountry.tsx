import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCountriesSaga } from '../redux/actions'

import { AppState } from '../types'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const SingleCountry = () => {
  const { name } = useParams() as any

  const history = useHistory() as any

  const dispatch = useDispatch()

  const allCountries = useSelector(
    (state: AppState) => state.countryReducer.countries
  )

  const [currentCountry, setCurrentCountry] = useState(
    allCountries.filter((country) => country.name === name)[0]
  )

  // fetching all countries
  useEffect(() => {
    dispatch(getCountriesSaga())
  }, [dispatch])

  // update all countries
  useEffect(() => {
    setCurrentCountry(
      allCountries.filter((country) => country.name === name)[0]
    )
  }, [allCountries, name])

  return (
    <div className="single-country">
      {currentCountry && currentCountry.name && (
        <Card className="single-country__card">
          <CardMedia
            className="single-country__card--img"
            component="img"
            height="140"
            image={currentCountry.flag}
            alt={currentCountry.name}
          />
          <CardContent className="single-country__card--body">
            <Typography gutterBottom variant="h5" component="div">
              {currentCountry.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capital: {currentCountry.capital}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Population: {currentCountry.population}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: {currentCountry.region}
            </Typography>
          </CardContent>
        </Card>
      )}
      <div className="single-country--btn">
        <Button
          className="single-country--btn-area"
          onClick={() => history.push('/')}
          size="small"
          color="primary"
        >
          Go Back
        </Button>
      </div>
    </div>
  )
}

export default SingleCountry
