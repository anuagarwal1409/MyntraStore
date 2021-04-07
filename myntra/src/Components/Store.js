import React, { Component } from 'react'
import Details from './Details';
import Mapped from './Map';
import Reviews from './Reviews';
import {DisplayMapFC} from "./DisplayMapFC";
import { Grid } from '@material-ui/core';

export default class Store extends Component {
    render() {
        return (
            <div>
                <Grid container lg={12} zeroMinWidth={true}>
                    <Grid item lg={12}> <DisplayMapFC/>  </Grid>
                    <Grid item lg={12}> <Mapped/>  </Grid>
                    <Grid item lg={6}>              
                        <Details/>
                        <Reviews/>
                    </Grid>
                    <Grid item lg={6}>              
                        <Details/>
                        <Reviews/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
