import { UserLayout } from '../../components/layouts'
import { Box, Typography, Toolbar, ButtonGroup, Button } from '@mui/material'
import { WeightProgressChart } from '../../components/chartjs';

const drawerWidth: number = 240;


export default function MyProgress(){
  return (
    <UserLayout title={'Rowing Master | My progress'} pageDescription={'Coaches page'}>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
        
      >
        <Toolbar />
        <Typography variant='h4' component='h1'>Mi progreso</Typography>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <ButtonGroup sx={{margin:'3vh auto auto'}} variant="contained" aria-label="outlined primary button group">
              <Button>Tiempo</Button>
              <Button>Distancia</Button>
              <Button>Calorias</Button>
              <Button>Mi peso</Button>
          </ButtonGroup>
        </Box>
        <WeightProgressChart/>
      </Box>
    </UserLayout>  )
}
