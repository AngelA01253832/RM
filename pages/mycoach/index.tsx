import { UserLayout } from '../../components/layouts'
import { Box, Grid, Toolbar, Typography } from '@mui/material'
import { CoachCard } from '../../components/coaches';
import { DoneWorkoutCard } from '../../components/workouts/DoneWorkoutCard';

const drawerWidth : number = 240;

export default function MyCoach(){
  return (
    <UserLayout title={'Rowing Master | My Coach'} pageDescription={'Coaches page'}>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Typography variant='h4' component='h1'>Mi entrenador</Typography>
        <Grid container spacing={2} style={{
            marginTop:'1.5vh'
        }}>
            <Grid item xs={12}>
              <CoachCard/>
            </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant='h4' component='h1'>Rutinas personales</Typography>
        <Grid container spacing={2} style={{
            marginTop:'1.5vh'
        }}>
            <Grid item xs={6}>
                <DoneWorkoutCard/>
            </Grid>
        </Grid>
      </Box>
      </Box>
    </UserLayout>  )
}
