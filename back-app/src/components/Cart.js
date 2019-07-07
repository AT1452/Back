import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import OpportunityCart from './OpportunityCart'
import Opportunity from './Opportunity';
import {Card, CardBody} from 'reactstrap';
import {EventConsumer} from '../context';
import { PayPalButton } from "react-paypal-button-v2";


export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <div className="mx-auto">
                            <Card style={cardStyle}>
                                <CardBody>
                                    <h2>Windy City Hacks</h2>
                                    <p style={eventNameStyle}>Level 1 Sponsorship</p>
                                    <p style={companyStyle}>This package includes your name listed as a sponsor on our website and a few posters throughout the venue to get participants interested in your company!"</p>
                                    <div className="row">
                                        <div className="col">
                                            <p style={dateStyle}>$100</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="mx-auto">
                            <Card style={cardStyle}>
                                <CardBody>
                                    <h2>HackSTL</h2>
                                    <p style={eventNameStyle}>Level 1 Sponsorship</p>
                                    <p style={companyStyle}>This package includes your name listed as a sponsor on our website and a few posters throughout the venue to get participants interested in your company!"</p>
                                    <div className="row">
                                        <div className="col">
                                            <p style={dateStyle}>$100</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Total</h1>
                        <h2>$200</h2>
                        <PayPalButton
                            amount="0.01"
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
const companyStyle = {
    color: '#6B6B6B'
};
const eventNameStyle = {
    color: '#000000'
};
const cardStyle = {
    width: 1000,
    height: 200
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