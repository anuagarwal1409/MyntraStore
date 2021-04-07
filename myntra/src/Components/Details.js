import { Carousel } from "react-bootstrap";

import React from "react";
import Reviews from "./Reviews";


function Details() {
  return (
    <div>
            <Carousel style={{height:"500px"}}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1591210155596-GQPVBDDDTDPMEU0UB56D/ke17ZwdGBToddI8pDm48kA7e4wRd4ZDldd6PbS9BVI5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvXn8XMwMq-aCqUEV8fAVtSaljtELrLyv8fOgO87iUSoS6gU-xB5T__qABPCYgFO0/Organic-Clothing-Brands-Thought-Clothing?format=500w"
            alt="First slide"
            />
            
        </Carousel.Item>
        <Carousel.Item >
            <img
            className="d-block w-100"
            src="https://www.womansworld.com/wp-content/uploads/2020/10/womens-clothing-store.jpg"
            alt="Second slide"
           
            />

            
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://static.fibre2fashion.com/articleresources/images/64/6328/best-buy-for-branded-clothes.jpg"
            alt="Third slide"
            height='400'
            width='600'
            />

            
        </Carousel.Item>
        </Carousel>
        <Reviews/>
    </div>
  );
}

export default Details;
