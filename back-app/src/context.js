import React, {Component} from 'react';
import {storeProducts, detailProduct, eventList} from './data';

const EventContext = React.createContext();

class EventProvider extends Component {
    state = {
        events: [], //TODO CHANGE TO EVENT LIST
        details: detailProduct, //TODO CHANGE TO EVENT
        perks: [],
        cart: [],
        result: 0
    };



    componentDidMount() {
        this.setEvents();
    }

    setEvents = () => {
        let tempEvents = [];
        eventList.forEach(event => {
            const singleEvent = {...event};
            tempEvents = [...tempEvents, singleEvent]
        });
        this.setState(() => {
            return {events: tempEvents}
        })
    };

    updateResult = (newRes) => {
        this.setState(() => {
            return{result: newRes};
        })
    };

    getResult = (newRes) => {
        this.updateResult(newRes)
    };

    getEvent = (id) => {
        console.log(id + "from context");
        const event = this.state.events.find(event => event.id === id);
        return event;
    };
    getEventbyName = (name) => {
        console.log(name + "from context");
        const event = this.state.events.find(event => event.name === name);
        return event;
    };

    handleDetails = (id) => {
        console.log(id);
        const event = this.getEvent(id);
        this.setState(() => {
            return {details: event};
        });
        console.log("dets");
        console.log(this.state.details);
    };

    addToCart = (id) => {
        let tempEvents = [...this.state.events];
        const firstIndex = tempEvents.indexOf(this.getEventbyName(id));
        const actIndex = tempEvents[firstIndex].find(opp => opp.id === id);
        const opp = tempEvents[firstIndex][actIndex];
        opp.inCart = true;
        this.setState(() => {
            return { events: tempEvents, cart:[...this.state.cart, opp] };
        }, ()=>{console.log(this.state)
        }
        )
    };



    render(){
        return(
            <EventContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleCart: this.addToCart,
                getResult: this.getResult,
            }}>
                {this.props.children}
            </EventContext.Provider>
        )
    }
    
}

const EventConsumer = EventContext.Consumer;


export {EventProvider, EventConsumer};