import React, { Component } from 'react'
import Details from './Details';
import Mapped from './Map';
import Reviews from './Reviews';
import {DisplayMapFC} from "./DisplayMapFC";
import { Grid, Typography, makeStyles} from '@material-ui/core';
import TabLayout from './TabLayout';
import ComplainCell from './ComplainCell';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    lower:{
        padding:20,
    }
  });

export default function Store() {
    const classes = useStyles();
        return (
            <div>
                <Grid container lg={12} zeroMinWidth={true} alignContent='space-between'>
                    <Grid item lg={12}> <DisplayMapFC/>  </Grid>
                    <Grid item lg={5} className={classes.lower}> 
                        <Typography variant="h4" component="h4" >
                            PARITY JUCTION</Typography> 
                                      
                        <Typography variant="outline" >
                             Chandrasekher Nager, Bhubaneshwar, India
                        </Typography>
                        <br/>  
                        <Typography variant="caption" >
                            Ph: +91-1234567890 Email: parity.juction@gmail.com
                        </Typography>
                        <Details/>
                        <Typography variant="h6" >
                             Reviews
                        </Typography>
                        <Reviews/>
                    </Grid>
                    <Grid item lg={7} className={classes.lower}>
                        <TabLayout/> 
                        <ComplainCell/>             
                    </Grid>
                </Grid>
            </div>
        );
};
