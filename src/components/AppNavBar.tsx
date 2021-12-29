import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCountry } from '../redux/actions'

import { AppState } from '../types'
import FavouriteItem from './FavouriteItem'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import FavoriteIcon from '@mui/icons-material/Favorite'
// import LightModeIcon from '@mui/icons-material/LightMode'

const AppNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const dispatch = useDispatch()

  // selecting favourite
  const favourite = useSelector(
    (state: AppState) => state.favouriteReducer.favourite
  )

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="nav-bar">
        <Toolbar className="nav-bar__nav">
          <Typography
            className="nav-bar__nav--logo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Rest Countries
          </Typography>
          <div>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <LightModeIcon />
            </IconButton> */}
            <Menu
              className="nav-bar__nav--favourite-list"
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <h2 className="nav-bar__nav--favourite-list--heading">
                Favourite Items
              </h2>
              <div className="nav-bar__nav--favourite-list--body">
                {favourite.length === 0 && (
                  <div>
                    <p>No country in the favourite</p>
                  </div>
                )}
                {favourite &&
                  favourite.map((country: any) => (
                    <FavouriteItem
                      key={country.name}
                      flag={country.flag}
                      name={country.name}
                      onClick={() => dispatch(removeCountry(country))}
                    />
                  ))}
              </div>
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Badge badgeContent={favourite && favourite.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppNavBar
