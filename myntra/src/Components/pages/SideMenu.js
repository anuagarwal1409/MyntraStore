import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import pic1 from '../Myntra1.jpg'
import pic2 from '../m2.jpg'

const drawerWidth = 600;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: 'grey',
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));

function SideMenu() {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid>
        {/* <Avatar
          src='C:\Users\KIIT\Desktop\MyntraStore\myntra\src\Myntra1.jpg'
          className={classes.bigAvatar}
        /> */}
         <div style={{display:'flex'}}>
         <img src={pic1} alt="pic1" />;
         <img src={pic2} alt="pic2" />;
         </div>
        
      </Grid>
    
        
      
    </Drawer>
  );
}

export default SideMenu;