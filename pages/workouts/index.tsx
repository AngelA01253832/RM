import { UserLayout } from '../../components/layouts';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import { WorkoutCard } from '../../components/workouts/WorkoutCard';

const drawerWidth : number = 240;

export default function Workout(){
  return (
    <UserLayout title={'Rowing Master | Workouts'} pageDescription={'Workouts page'}>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Typography variant='h4' component='h1'>Rutinas</Typography>
        
        <Grid container spacing={2} style={{
            marginTop:'1.5vh'
        }}>
            <Grid item xs={3}>
                <WorkoutCard/>
            </Grid>
            <Grid item xs={3}>
                <WorkoutCard/>
            </Grid>
            <Grid item xs={3}>
                <WorkoutCard/>
            </Grid>
            <Grid item xs={3}>
                <WorkoutCard/>
            </Grid>
        </Grid>
      </Box>
    </UserLayout>  )
}
