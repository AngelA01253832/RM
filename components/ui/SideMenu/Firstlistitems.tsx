import { List, Link } from "@mui/material";
import { SideMenuItem } from "./SideMenuItem";
import NextLink from 'next/link';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import GroupIcon from '@mui/icons-material/Group';


export const Firstlistitems = () => {
  return (
    <List>
      <NextLink href='/' passHref>
        <Link>
            <SideMenuItem text={'Inicio'} icon={<HomeIcon />} />
        </Link>
      </NextLink>
      <NextLink href='/myprogress' passHref>
        <Link>
            <SideMenuItem text={'Mi progreso'} icon={<BarChartIcon />} />
        </Link>
      </NextLink>
      <NextLink href='/workouts' passHref>
        <Link>
            <SideMenuItem text={'Rutinas'} icon={<FitnessCenterIcon />} />
        </Link>
      </NextLink>
      <NextLink href='/workoutsrecord' passHref>
        <Link>
            <SideMenuItem text={'Rutinas hechas'} icon={<BookmarkAddedIcon />} />
        </Link>
      </NextLink>
      <NextLink href='/coaches' passHref>
        <Link>
            <SideMenuItem text={'Entrenadores'} icon={<GroupIcon />} />
        </Link>
      </NextLink>
      <NextLink href='/mycoach' passHref>
        <Link>
            <SideMenuItem text={'Mi entrenador'} icon={<MonitorWeightIcon />} />
        </Link>
      </NextLink>      
    </List>
  )
}
