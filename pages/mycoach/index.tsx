import { UserLayout } from '../../components/layouts'
import { Box, Toolbar, Typography } from '@mui/material'

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
      </Box>
    </UserLayout>  )
}
