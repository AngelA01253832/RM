import { UserLayout } from '../../components/layouts'
import { Box, Typography, Toolbar } from '@mui/material'

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
      </Box>
    </UserLayout>  )
}
