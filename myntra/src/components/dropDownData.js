import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>

       <Grid container spacing={2}>
           <li>
               <ul>
                   <li>
                       <span style={{color:'#fb56c1',fontWeight: 'bold'}}>Indian & Fusion Wear</span>
                   </li>
                   <li>Kurtas & Suits</li>
                   <li>Kurtis,Tunics, & Tops</li>
                   <li>Ethinic Wear</li>
                   <li>Leggings, Salwars & Churidars</li>
                   <li>Skirts & Palazzos</li>
                   <li>
                   <span style={{color:'#fb56c1',fontWeight: 'bold'}}>Belts, Scarves & More</span>
                   </li>
                   <li>
                   <span style={{color:'#fb56c1',fontWeight: 'bold'}}>Watches & Wearables</span>
                   </li>
               </ul>
           </li>
           <li>
               <ul>
                   <li>
                       <span style={{color:'#fb56c1',fontWeight: 'bold'}}>Western Wear</span>
                   </li>
                   <li>Dresses</li>
                   <li>Jumpsuits</li>
                   <li>Tops</li>
                   <li>Jeans</li>
                   <li>Trousers & Capris</li>
                   <li>
                   <span style={{color:'#fb56c1',fontWeight: 'bold'}}>Plus Size</span>
                   </li>
                   <li>
                   <span style={{color:'#fb56c1',fontWeight: 'bold'}}>Sunglasses & Frames</span>
                   </li>
               </ul>
           </li>
      
      </Grid> 
    </div>
  );
}
