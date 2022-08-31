import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


function Header() {
  return (
    <div>

<TextField
        className="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BiSearchAlt />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  )
}

export default Header;