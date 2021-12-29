import React from 'react'

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export type SearchKeywordProps = {
  keyword: string
  onChange: Function
}

const Search = ({ keyword, onChange }: SearchKeywordProps) => {
  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Country"
        inputProps={{ 'aria-label': 'search country' }}
        value={keyword}
        onChange={onChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
