import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import OpportunityCart from './OpportunityCart'
import Opportunity from './Opportunity';
import {Card, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import {EventConsumer} from '../context';
import { PayPalButton } from "react-paypal-button-v2";
import firebase from './Firestore'
import Checkout from './Checkout';

var eventName = "Hello!"
export default class Cart extends Component {
    state = {
        eventArray: [],
        totalCost: 0
    }

    componentWillMount()
    {
        const db = firebase.firestore();
        const cost = this.state.totalCost;
        db.collection("cart").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                //cost += doc.get('price');
                this.createEvent(doc.get('name'), doc.get('sponsorship'),doc.get('desc'),doc.get('price'), doc.get('name'));
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        //console.log(this.state.totalCost);
        //alert(cost);
    }  
    removeEvent(name)
    {
        console.log('hello')
        console.log(name);
        const db = firebase.firestore();
        db.collection("cart").doc(name).delete().then(function() {
            console.log("Document successfully deleted!");
            window.location.reload();
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        
    }

    createEvent(name, sponsorship, desc, price)
    {
        const event = this.state.eventArray;
        const cost = this.state.totalCost;
        console.log(name);
        console.log(sponsorship);
        console.log(desc);
        console.log(price);
        this.state.totalCost += price;
        //alert(cost);
        event.push(
            <div className="mx-auto">
                <Card style={cardStyle}>
                    <CardBody>
                        <h2>{name}</h2>
                        <p style={eventNameStyle}>{sponsorship}</p>
                        <p style={companyStyle}>{desc}</p>
                        <p style={dateStyle}>${price}</p>
                        <button style={buttonStyle} id={name} onClick={() => this.removeEvent(name)}>Remove From Cart</button>
                    </CardBody>
                </Card>
            </div>
        )
        this.setState({eventArray: event})
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <div>
                            {this.state.eventArray.map((event, index) => {
                                return <div className="box" key={index}>{event}</div>
                            })}
                        </div>
                    </div>
                    <div className="col">
                        <h1>Total</h1>
                        <h2>${this.state.totalCost}</h2>
                        <PayPalButton
                            amount={this.state.totalCost}
                            onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                    
                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                orderID: data.orderID
                                })
                            });
                            }}
                        />
                             
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const dateStyle = {
    color: "#063FA3",
};
const buttonStyle = {
    width: 200,
    background: "transparent",
    borderColor: "blue",
    borderRadius: "10px"
};
const companyStyle = {
    color: '#6B6B6B'
};
const eventNameStyle = {
    color: '#000000'
};
const cardStyle = {
    width: 1000,
    height: 250
};

const cartBtn = {
    background: "transparent",
    borderRadius: "0.3em",
    color: "blue",
    bottom: "20",
};

const col = {
    marginLeft: 350
};