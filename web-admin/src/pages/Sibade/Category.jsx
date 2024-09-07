import React, { useState } from 'react' 
import Box from '@mui/material/Box' 
import Breadcrumbs from '@mui/material/Breadcrumbs' 
import Link from '@mui/material/Link' 
import Typography from '@mui/material/Typography' 
import HomeRoundedIcon from '@mui/icons-material/HomeRounded' 
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded' 
import OrderTable from '~/component/OrderTable/OrderTable'


function Category() {
  return (
    <Box
      component="main"
      sx={{
          px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
            Category
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          ngap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      ></Box>
      <Box sx={{ flex: 1 }}>
        <OrderTable />
      </Box>
    </Box>
  );
}
export default Category;
