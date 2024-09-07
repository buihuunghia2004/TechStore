import React from 'react' 
import Container from '@mui/material/Container' 
import AppBar from '../component/AppBar/AppBar' 
import Sidebar from '../component/SideBar/SideBar' 
import ContentRouter from '~/routes/ContentRoute'

function Home() {  
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', width: '100%', display: 'flex' }}>  
      <AppBar />
      <Sidebar />
      <ContentRouter /> 
    </Container>  
  ) 
}  

export default Home