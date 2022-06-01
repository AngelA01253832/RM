import { List } from "@mui/material"
import { SideMenuItem } from "./SideMenuItem"

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import GroupIcon from '@mui/icons-material/Group';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';


export const Firstlistitems = () => {
  return (
    <List>
        <SideMenuItem text={'Inicio'} icon={<HomeIcon />} />
        <SideMenuItem text={'Mi progreso'} icon={<BarChartIcon />} />
        <SideMenuItem text={'Rutinas'} icon={<FitnessCenterIcon />} />
        <SideMenuItem text={'Rutinas hechas'} icon={<BookmarkAddedIcon />} />
        <SideMenuItem text={'Mi peso'} icon={<MonitorWeightIcon />} />
        <SideMenuItem text={'Entrenadores'} icon={<GroupIcon />} />
        <SideMenuItem text={'Mi entrenador'} icon={<SettingsAccessibilityIcon />} />
    </List>
  )
}
