import React, {Component} from 'react';
import Event from './Event'
import Title from "./Title"
import {storeProducts} from '../data';
import "bootstrap/dist/css/bootstrap.min.css"
import {EventConsumer} from '../context';

export default class EventList extends Component {
    state={
        events: storeProducts
    };

    render() {

        console.log(this.state.events);
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title title="Events"/>
                            <div className="row">
                                <EventConsumer>
                                    {val => {
                                        return val.events.map(event => {
                                            return <Event event={event}/>
                                        })
                                    }}
                                </EventConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}