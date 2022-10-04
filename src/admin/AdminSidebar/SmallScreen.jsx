import * as React from 'react';
import logoadmin from '../assets/images/logoadmin.png'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SmallScreen() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className="adminsidebar">
        <img src={logoadmin} alt="logo" />
        <Link to="/adduser"><h3>User </h3></Link>
        <Link to="/managepages"><h3>Pages </h3></Link>
        <Link to="/getonboard"><h3>Onboard </h3></Link>
        <Link to="/texttestomonial"><h3>Testimonials </h3></Link>
        <Link to="/partnerwithus"><h3>Partner with us </h3></Link>
        <Link to="/contactus"><h3>Contact Us </h3></Link>
        <Link to="/managenews"><h3>Manage Newsletter </h3></Link>
        <Link to="/"><h3>Logout </h3></Link>

      </div>

    </>
  );
}
