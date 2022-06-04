import { Box, Toolbar, Typography } from '@mui/material'
import { UserLayout } from '../../components/layouts'
import { WorkoutDescription } from '../../components/workouts/WorkoutPage';

const drawerWidth : number = 240;

export default function WorkoutPage(){
  return (
    <UserLayout title={'Rowing Master | Done Workouts'} pageDescription={'Coaches page'}>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Typography variant='h4' component='h1'>Rutina hoy</Typography>
        <WorkoutDescription/>
      </Box>
    </UserLayout>  )
}
