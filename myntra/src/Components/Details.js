import { Carousel } from "react-bootstrap";

import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
   width:'100%'
  },
}));

function Details() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            <Carousel>
        <Carousel.Item>
            <img
            src="https://media.istockphoto.com/photos/know-ill-find-something-i-like-here-picture-id694044976?k=6&m=694044976&s=612x612&w=0&h=XPxsFIQ5pTVUMC60_BFA3u4v4o_pKmFV4AfBlf17d9U="
            alt="First slide"
            height='400'
            width='600'
            />
            
        </Carousel.Item>
        <Carousel.Item >
            <img

            src="https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=6&m=901863672&s=612x612&w=0&h=-_sWo8B6OJRaj4OuwblW8ytajBnBY_UMuaXGjr95wrE="
            alt="Second slide"
            height='400'
            width='600'

            />

            
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="https://media.istockphoto.com/photos/boutique-clothing-store-picture-id1152092333?k=6&m=1152092333&s=612x612&w=0&h=ps8pv0Esh1EwyNTpGBNebgNCJ8wiOWCduoJo2ggAi1g="
            alt="Third slide"
            height='400'
            width='600'
            />

            
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Details;
