import React from 'react'
import { Link } from 'react-router-dom'

import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export type CountryCardProps = {
  name: string
  capital: string
  flag: string
  onClick: Function
  disabled: boolean
}

const CountryCard = ({
  flag,
  name,
  capital,
  onClick,
  disabled,
}: CountryCardProps) => {
  return (
    <Paper className="country-card">
      <Grid item xs={12} md={12} className="country-card__area">
        <ListItem
          secondaryAction={
            <div className="country-card__area--icons">
              <IconButton
                className="country-card__area--icons-btn"
                disabled={disabled}
                aria-label="add to favorites"
                onClick={() => onClick()}
              >
                <FavoriteIcon />
              </IconButton>
              <Link to={`/country/${name}`}>
                <div className="country-card__area--icons-more">
                  <IconButton
                    aria-label="Learn More"
                    className="country-card__area--icons-btn"
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </div>
              </Link>
            </div>
          }
        >
          <ListItemAvatar className="country-card__area--avatar">
            <img src={flag} alt={name} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={capital}
            className="country-card__area--body-text"
          />
        </ListItem>
      </Grid>
    </Paper>
  )
}

export default CountryCard
