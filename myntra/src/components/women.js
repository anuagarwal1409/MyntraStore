import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InteractiveList from './dropDownData';

 const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    
    buttons: {
        '&:hover':{
            borderBottomColor:'#fb56c1', 
            borderBottomWidth:'4px', 
            borderBottomStyle:'Solid',
        },
    },
  }));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',

  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="default"
        color="primary"
        onClick={handleClick}
        className = {classes.buttons}
        
      >
        Women
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <InteractiveList/>
        {/* <StyledMenuItem>
          
          <ListItemText primary="Kurtas and Suits" />
        </StyledMenuItem>
        <StyledMenuItem>
          
          <ListItemText primary="Kurtis,Tunics & Tops" />
        </StyledMenuItem>
        <StyledMenuItem>
          
          <ListItemText primary="Ethinic Wear" />
        </StyledMenuItem> */}
      </StyledMenu>

    </div>
  );
}
