import {
  Drawer, List, IconButton, Menu, ListItem, MenuItem, ListItemIcon,
  Badge, ListItemText, Toolbar, Divider
} from "@mui/material/";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import User from "../user/User";
import * as React from 'react';
import styles from "./Navigation.module.scss";
import classNames from "classnames";

const options = [
  'Logout',
];

const ITEM_HEIGHT = 48;

export default function Navigation() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames(styles.wrapper)}>
      <Drawer className={classNames(styles.drawer)}
        sx={{
          width: '245px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '245px',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >


        <Toolbar className={classNames(styles.toolbar)}>

          <User avatar="images/avatar.png" name="John Doe" size='55px' headingSize='h5' />

          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'}
                onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>

        </Toolbar>


        {/* <Divider /> */}
        <List>
          {['Apartment', 'Living Room', 'Bedroom', 'Bathroom', 'Toilet', 'Patio'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              <Badge color="secondary" badgeContent={1} ></Badge> {/*warning*/}
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <List>
          {['Apartment', 'Living Room', 'Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bathroom ', 'Toilet', 'Patio'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
