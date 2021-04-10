import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from './SideMenu';
import MainContent from './MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideMenu />
      <MainContent />
    </div>
  );
}

export default Home;