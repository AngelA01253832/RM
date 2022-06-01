import { Box, Toolbar, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { UserLayout } from '../components/layouts';
import { LastTraining } from '../components/ui/MenuCards';

const drawerWidth : number = 240;

const Home: NextPage = () => {
  return (
    <UserLayout title={'Rowing Master | Home'} pageDescription={'Rowing Master home page'}>
        <Box
        component="main"
        sx={{ 
          flexGrow: 1,
          p: 3,  
          width: { sm: `calc(100% - ${drawerWidth}px)` } 
        }}
      >
        <Toolbar />
        <Typography variant='h3' component='h1'>Bienvenido usuario</Typography>
        <LastTraining/>
      </Box>
    </UserLayout>
  )
}

export default Home
