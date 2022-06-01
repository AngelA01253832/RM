import { useState } from 'react';
import { Grid,Card,Drawer, Box, List, Typography, Divider, AppBar, Toolbar, IconButton, Avatar } from "@mui/material";

//Icons
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import { SideMenuItem, ProfileSection, Firstlistitems } from '.';

const date = Date.now();
const toDay = new Date(date)

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
            <Firstlistitems/>
          <div style={{
              marginTop:'30vh'
          }}>
            <List>
                <SideMenuItem text={'Configuración'} icon={<SettingsIcon />} />
                <SideMenuItem text={'Ayuda'} icon={<HelpIcon />} />
            </List>
          </div>
          <Divider />
          <List>
              <ProfileSection/>
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
          <div>
            <div style={{background:'#4040F2', borderRadius:'20px'}}>
            <Typography variant="h6" component='h1' style={{ fontWeight: 500 }}>{`Hoy(${toDay.toLocaleDateString()})`}</Typography>
            </div>

          </div>
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

    </Box>
  );
}
