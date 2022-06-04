import { Box, Toolbar, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { UserLayout } from '../components/layouts';
import { LastTraining, TodayWorkout, WeightProgress } from '../components/ui/IndexCards';

const drawerWidth: number = 240;

const Home: NextPage = () => {
  return (
    <UserLayout title={'Rowing Master | Home'} pageDescription={'Rowing Master home page'}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)`}
        }}
      >
        <Toolbar />
        <Typography variant='h4' component='h1'>Bienvenido Angel Bonilla</Typography>
        <LastTraining />
        <TodayWorkout />
        <WeightProgress />
      </Box>
    </UserLayout>
  )
}

export default Home