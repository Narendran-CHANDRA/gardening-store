// ProfileDetails.js
import React from 'react';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    backgroundColor: theme?.palette?.background?.paper || '#fff',
  },
}));

const ProfileDetails = ({ isOpen, onClose }) => {
  return (
    <StyledDrawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <List>
        <ListItem>
          <ListItemText primary="Username: JohnDoe" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email: johndoe@example.com" />
        </ListItem>
        {/* Add more profile details as needed */}
      </List>
    </StyledDrawer>
  );
};

export default ProfileDetails;
