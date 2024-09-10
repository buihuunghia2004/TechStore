import React, { useState } from 'react' 
import Box from '@mui/material/Box' 
import Breadcrumbs from '@mui/material/Breadcrumbs' 
import Link from '@mui/material/Link' 
import Typography from '@mui/material/Typography' 
import HomeRoundedIcon from '@mui/icons-material/HomeRounded' 
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded' 
import CategoryTable from '~/pages/Category/CategoryTable/CategoryTable'


function Category() {
  return (
    <Box>
       <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "primary.dark", height:60,p:1 }}>
        <Breadcrumbs sx={{ color: "white" }} size="sm" aria-label="breadcrumbs" separator={
          <ChevronRightRoundedIcon fontSize="sm" />} >
          <Link sx={{color: 'white'}} underline="none" color="neutral" href="#some-link" aria-label="Home">
            <HomeRoundedIcon sx={{color: 'white'}} />
          </Link>
          <Typography color="white" sx={{ fontWeight: 500, fontSize: 12 }}>Category</Typography>
        </Breadcrumbs>
      </Box>
    <Box component="main"
      sx={{ 
        px: { xs: 2, md: 3 },
        pt: {xs: "calc(12px + var(--Header-height))",sm: "calc(12px + var(--Header-height))",md: 3, },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,display: "flex",flexDirection: "column",minWidth: 0,height: "100dvh",gap: 1,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <CategoryTable />
      </Box>
    </Box>
    </Box>
  );
}
export default Category;
