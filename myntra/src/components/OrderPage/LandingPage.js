  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideComp from './SideComp';
import MainComp from './MainComp';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideComp/>
      <div style={{marginLeft:'20px'}}>
      <MainComp/>
      </div>
      
    </div>
  );
}

export default LandingPage;