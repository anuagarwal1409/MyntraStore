import React, { Component } from 'react'
import Details from './Details';
import IFrame from './Map1';
import Reviews from './Reviews';

export default class Store extends Component {
    render() {
        return (
            <div>
                <IFrame/>
                <Reviews/>
                <Details/>
            </div>
        )
    }
}
