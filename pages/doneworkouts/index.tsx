import { Box, Toolbar, Typography } from '@mui/material'
import { UserLayout } from '../../components/layouts'

const drawerWidth : number = 240;

export default function DoneWorkout(){
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
        <Typography variant='h4' component='h1'>Mi historial de rutinas</Typography>
      </Box>
    </UserLayout>  )
}
