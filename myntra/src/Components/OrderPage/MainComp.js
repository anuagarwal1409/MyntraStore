import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import ReturnOtions from './ReturnOptions';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 450,
  },
});

export default function MainComp() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10299785/2021/1/19/91263889-ea93-4728-a840-adb04cca492b1611036343753-Biba-Women-Pink--Golden-Printed-Straight-Kurta-1051611036341-1.jpg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Biba
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Women Pink & Yellow Yoke Design Kurta with Trousers & Dupatta<br></br>Size:S
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container alignContent={'space-between'}  alignItems={'center'}>
          <Grid xs={6} alignItems={'center'}>
          <InputLabel id="demo-customized-select-label" style={{color:"#fb56c1", fontWeight:'bold', paddingTop: '7px'}}>EXCHANGE</InputLabel>
          </Grid>
          <Grid xs={6}  alignItems={'center'}>
          <InputLabel id="demo-customized-select-label" style={{color:"#fb56c1", fontWeight:'bold', paddingTop: '7px'}}>RETURN</InputLabel>
          </Grid>
        </Grid>
      </CardActions>
      <Typography style={{fontSize :'10px',padding :'10px'}}>You have 14 days from the shipping date of your order to return your purchase from Myntra.com free of charge. The items must have all their labels and be in perfect condition.

Click here to see the special actions related to COVID-19.

These are the options for returning your item(s):


Myntra store
You can return your order at any Myntra Partner store in the same market/region where you made the purchase.

You only have to present the purchase receipt along with the items you wish to return. You can show it on the screen of your mobile device or print it out.

Remember that you do not need to make a return request via the website or the app for in-store returns.

Bear in mind that if you cannot make it to a physical store yourself, you can allow someone else to go for you.</Typography>
    </Card>
  );
}
