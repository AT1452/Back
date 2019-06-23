import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const EventContext = React.createContext();

class EventProvider extends Component {
    state = {
        events: storeProducts, //TODO CHANGE TO EVENT LIST
        details: detailProduct //TODO CHaNGE TO EVENT
    };

    handleDetails = () => {
        console.log('these are details')
    };

    addToCart = () => {
        console.log('this is how you add to cart')
    }

    render(){
        return(
            <EventContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleCart: this.addToCart
            }}>
                {this.props.children}
            </EventContext.Provider>
        )
    }
    
}

const EventConsumer = EventContext.Consumer;


export {EventProvider, EventConsumer};