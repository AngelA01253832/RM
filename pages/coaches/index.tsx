import { Box, Typography, Toolbar, Grid } from '@mui/material'
import { UserLayout } from '../../components/layouts'

const drawerWidth : number = 240;

export default function Coach(){
  return (
    <UserLayout title={'Rowing Master | Coaches'} pageDescription={'Coaches page'}>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Typography variant='h4' component='h1'>Nuestros entrenadores</Typography>
      </Box>

      <Grid container spacing={2} style={{
            marginTop:'1.5vh'
        }}>
        
      </Grid>
    </UserLayout>
  )
}
