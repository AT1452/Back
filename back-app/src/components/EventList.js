import React, {Component} from 'react';
import Event from './Event'
import Title from "./Title"
import {eventList, storeProducts} from '../data';
import "bootstrap/dist/css/bootstrap.min.css"
import {EventConsumer} from '../context';
import {Card, CardTitle, CardBody, Button} from 'reactstrap'
import firebase from './Firestore'


const db = firebase.firestore();

// db.collection("events").get()
// .then(function(querySnapshot) {
//     let allDocs = [];
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         allDocs.push(doc.data());
//     });
//     console.log(allDocs)
// })
// .catch(function(error) {
//     console.log("Error getting documents: ", error);
// });

export default class EventList extends Component {
    render() {
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
                                            console.log(event);
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

const buttonStyle = {
    fontsize: 4.5
};