import { Box, Grid, Toolbar, Typography } from '@mui/material'
import { UserLayout } from '../../components/layouts'
import { DoneWorkoutCard } from '../../components/workouts/DoneWorkoutCard';

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
        <Typography variant='h4' component='h1'>Historial de entrenamiento</Typography>
        <Grid container spacing={2} style={{
            marginTop:'1.5vh'
        }}>
            <Grid item xs={6}>
                <DoneWorkoutCard/>
            </Grid>
        </Grid>

      </Box>
    </UserLayout>  )
}
