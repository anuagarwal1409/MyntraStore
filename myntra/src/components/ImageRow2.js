import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img1 from '../assets/img1.png'


const useStyles = makeStyles((theme) => ({
    root: {
     width:'100%'
    },
  }));

export default function ImageRow2() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={img3} width="100%" height="250px"/>
            <img src={img4} width="100%" height="250px"/>
            <img src={img1} width="100%" height="250px"/>
        </div>
    )
}
