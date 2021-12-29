import React from 'react'

import MenuItem from '@mui/material/MenuItem'
import DeleteIcon from '@mui/icons-material/Delete'

type FavouriteItemProps = {
  flag: string
  name: string
  onClick: Function
}

const FavouriteItem = ({ flag, name, onClick }: FavouriteItemProps) => {
  return (
    <MenuItem className="favourite-item">
      <img className="favourite-item--flag" src={flag} alt={name} />
      <h4 className="favourite-item--name">{name}</h4>
      <DeleteIcon onClick={() => onClick()} />
    </MenuItem>
  )
}

export default FavouriteItem
