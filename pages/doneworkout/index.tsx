import { Box, Grid, Toolbar, Typography } from '@mui/material'
import { UserLayout } from '../../components/layouts'

const drawerWidth : number = 240;

export default function DoneWorkoutPage(){
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
        <Typography variant='h4' component='h1'>Rutina personal</Typography>
        <Grid container spacing={2} style={{
            marginTop:'1.5vh'
        }}>
            <Grid item xs={6}>

            </Grid>
        </Grid>

      </Box>
    </UserLayout>  )
}
