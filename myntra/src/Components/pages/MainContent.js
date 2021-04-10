import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import ShopDetails from '../NearbyShops';
import SideMenu from './SideMenu';



const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>

      
      {/* <div className={classes.toolbar} /> */}
      <div className={classes.title}>
        
        <Typography variant='h6'><b>Biba</b></Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
        Women Pink & Yellow Yoke Design Kurta with Trousers & Dupatta<br></br>
        <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>2 Reviews</Button>
        </Typography>
        <Typography >
           <h2>Rs. 4120  
             <span style={{textDecoration:'line-through'}}> Rs. 5995</span>
             <span style={{color:'#ff905f'}}>( 30 % OFF )</span> </h2>


        </Typography>
        <Typography style={{color:'#07a887',margin:'5px'}}>
        <b>inclusive of all taxes</b><br></br>

        </Typography>
        <Typography >
           <b> SELECT SIZE </b>
           <Button variant="contained" aria-label="outlined contained button group" style={{color:'#ff3e6c',marginRight:'10px'}}>SIZE CHART</Button>
        </Typography>
        <Typography >
      <div style={{display:'flex',margin:'20px'}}>
      <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>S<br></br>Rs.4196</Button>
      <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>M<br></br>Rs.4196</Button>
      <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>L<br></br>Rs.4196</Button>
      <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>XL<br></br>Rs.4196</Button>
      <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>XXL<br></br>Rs.4196</Button>
      <Button variant="contained" aria-label="outlined contained button group" style={{color:'grey',marginRight:'10px'}}>3XL<br></br>Rs.6100</Button>
      
     
      </div>
        </Typography>
        <Typography >
        <div style={{display:'flex',margin:'20px'}}>
          <Button variant="contained" aria-label="outlined contained button group" style={{color:'white',backgroundColor:'#ff3e6c', marginRight:'10px'}}>ADD TO BAG</Button>
        <Button variant="contained" aria-label="outlined contained button group" style={{color:'white',backgroundColor:'#97A1A9', marginRight:'10px'}}>WISHLIST</Button> <br></br>
       </div>
        </Typography>
        <Typography><h2><b>Near by Availability</b></h2></Typography>
        <ShopDetails/>
        
     </div> 
    </main>
  );
}

export default MainContent;