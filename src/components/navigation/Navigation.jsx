import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import User from "../user/User";

import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Container from "@mui/material/Container";
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
      <Drawer
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


        <Toolbar >

          <User avatar="images/avatar.png" name="John Doe" />

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


        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
