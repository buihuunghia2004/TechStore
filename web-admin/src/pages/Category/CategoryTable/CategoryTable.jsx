import React, { useState } from 'react';  
import Box from '@mui/material/Box';  
import FormControl from '@mui/material/FormControl';  
import FormLabel from '@mui/material/FormLabel';  
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';  
import SearchIcon from '@mui/icons-material/Search';  
import FilterAltIcon from '@mui/icons-material/FilterAlt';  
import AddCategory from './AddCategory/AddCategory';  
import CategoryTableContent from './CategoryTableContent/CategoryTableContent';  

export default function OrderTable() {  
  const [open, setOpen] = useState(false);  

  return (  
    <Box>  
      <AddCategory />  
      <Box  
        sx={{  
          display: { xs: 'none', sm: 'flex' },  
          flexWrap: 'wrap',  
          gap: 1.5,  
          py: 2,  
          borderRadius: 'sm',  
        }}  
      >  
        <FormControl sx={{ flex: 1 }} size="small">  
          <FormLabel>Search for order</FormLabel>  
          <InputBase
          sx={{p:1,mt: 1, pb: 1, color:'primary',}}
            size="small"  
            placeholder="Search"  
            startAdornment={  
              <InputAdornment position="start">  
                <SearchIcon />  
              </InputAdornment>  
            }  
          />  
        </FormControl>  
      </Box>  
      <CategoryTableContent />  
    </Box>  
  );  
}