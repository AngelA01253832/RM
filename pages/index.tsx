import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { UserLayout } from '../components/layouts';


const Home: NextPage = () => {
  return (
    <UserLayout title={'Rowing Master | Home'} pageDescription={'Rowing Master home page'}>
        <Typography variant='h1' component='h1'>Bienvenido usuario</Typography>
    </UserLayout>
  )
}

export default Home
