import * as React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Person2Icon from '@mui/icons-material/Person2';
import ClassIcon from '@mui/icons-material/Class';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EventIcon from '@mui/icons-material/Event';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from "./Home"
import MyResults from './MyResults';
import MyStudent from './MyStudent';
import MyClasses from './MyClasses';
import Assignment from "./Assignment";
import Notification from "./Notification";
import Events from "./Events";
import Holidays from "./Holidays";
import MySyllabus from "./MySyllabus";
import MyLeave from "./MyLeave";
import Daily from "./Daily";
import Logout from './Logout';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>

        <ListItem  disablePadding onClick = {() => navigate ("/")}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
        </ListItem>
        
        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/MyResults")}>
            <ListItemButton>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText  >My Student Results</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/MyStudent")}>
            <ListItemButton>
              <ListItemIcon>
                <Person2Icon />
              </ListItemIcon>
              <ListItemText  >My Student</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/MyClasses")}>
            <ListItemButton>
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText  >My Classes</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/Assignment")}>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText  >Assignment</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/Notification")}>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText  >Notification</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/Events")}>
            <ListItemButton>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText  >Events</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/Holidays")}>
            <ListItemButton>
              <ListItemIcon>
                <HolidayVillageIcon />
              </ListItemIcon>
              <ListItemText  >Holidays</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/MySyllabus")}>
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText  >My Syllabus</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/MyLeave")}>
            <ListItemButton>
              <ListItemIcon>
                <FormatClearIcon />
              </ListItemIcon>
              <ListItemText  >My Leave Requests</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/Daily")}>
            <ListItemButton>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText  >Daily Timing</ListItemText>
            </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding onClick = {() => navigate("/Logout")}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText  >Logout</ListItemText>
            </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'#25566f',
          // display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Ace School App Documentation
          </Typography>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, float:'right'}} >
            <SearchIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 5, float:'right'}} >
            <LiveHelpIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Routes >
            <Route exact path = "/" element = {<Home />}></Route>
            <Route  path = "/myResults" element = {< MyResults />}></Route>
            <Route  path = "/MyStudent" element = {<MyStudent />}></Route>
            <Route  path = "/MyClasses" element = {<MyClasses />}></Route>
            <Route  path = "/Assignment" element = {<Assignment />}></Route>
            <Route  path = "/Notification" element = {<Notification />}></Route>
            <Route  path = "/Events" element = {<Events />}></Route>
            <Route  path = "/Holidays" element = {<Holidays />}></Route>
            <Route  path = "/MySyllabus" element = {<MySyllabus />}></Route>
            <Route  path = "/MyLeave" element = {<MyLeave />}></Route>
            <Route  path = "/Daily" element = {<Daily />}></Route>
            <Route  path = "/Logout" element = {<Logout />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;