import { useState } from 'react';
import { Drawer, Box, List, Typography, Divider, AppBar, Toolbar, IconButton } from "@mui/material";
//Icons
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import GroupIcon from '@mui/icons-material/Group';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import { SideMenuItem } from '.';

const drawerWidth : number = 240;

interface Props {
  window?: () => Window;
}

export function SideMenu(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <div style={{
              textAlign: 'center',
              margin: '25px '
          }}>
            <Typography variant="h5" component='h1' style={{ fontWeight: 600 }}>Rowing Master</Typography>
        </div>
           <List>
                <SideMenuItem text={'Inicio'} icon={<HomeIcon />} />
                <SideMenuItem text={'Mi progreso'} icon={<BarChartIcon />} />
                <SideMenuItem text={'Rutinas'} icon={<FitnessCenterIcon />} />
                <SideMenuItem text={'Rutinas hechas'} icon={<BookmarkAddedIcon />} />
                <SideMenuItem text={'Mi peso'} icon={<MonitorWeightIcon />} />
                <SideMenuItem text={'Entrenadores'} icon={<GroupIcon />} />
                <SideMenuItem text={'Mi entrenador'} icon={<SettingsAccessibilityIcon />} />
          </List>
          <div style={{
              marginTop:'330px'
          }}>
            <List>
                <SideMenuItem text={'Configuración'} icon={<SettingsIcon />} />
                <SideMenuItem text={'Ayuda'} icon={<HelpIcon />} />
            </List>
          </div>
          <Divider />
          <List>
            
          </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        style={{background:'#121212'}}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component='h1' style={{ fontWeight: 600 }}>Rowing Master</Typography>
        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
