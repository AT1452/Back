import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {EventConsumer} from '../context';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../logo.svg"
import CardFooter from 'reactstrap/es/CardFooter';
import PropTypes from 'prop-types';
import { Alert } from 'react-alert'
import firebase from './Firestore'


export default class Opportunity extends React.Component {
    constructor(props)
    {
        super();
        this.state = {
            eventName: 'something',
            sizeofdb: 0,
        }
    }
    
    addToCart(cost, name, desc, eventName)
    {
        const db = firebase.firestore();
        var sizeofdb = 0;
        //this.receiveEventName()
        
        console.log(sizeofdb);
        db.collection("cart").doc(eventName).set({
            name: eventName,
            sponsorship: name,
            desc: desc,
            price: cost
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
        alert("You purchased the " + name + " which will cost you: $" + cost);
        
        return cost;
    }
    receiveEventName()
    {
        alert(this.props.passEventName(this.state.name));
    }

    render() {

        const {id, name, desc, usd, inCart} = this.props.opportunity;
        console.log(this.props);
        console.log(this.props.passEventName);
        return (

            <OpportunityWrapper className="mx-auto">
                <div className="mx-auto">
                    <Card style={cardStyle}>
                        <CardBody>
                            <p style={eventNameStyle}>{name}</p>
                            <p style={companyStyle}>{desc}</p>
                            <div className="row">
                                <div className="col" style={col}>
                                    <EventConsumer>
                                        {value => (
                                        <button style={cartBtn} onClick={() => this.addToCart(usd, name, desc, this.props.passEventName)}>
                                            <i className="fas fa-cart-plus"/>
                                        </button>
                                        )}
                                    </EventConsumer>
                                </div>
                                <div className="col">
                                    <p style={dateStyle}>${usd}</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </OpportunityWrapper>
        );
    }
}

Opportunity.propTypes = {
    opportunity:PropTypes.shape({
        name:PropTypes.string,
        desc:PropTypes.string,
        price:PropTypes.string
    }).isRequired
};

const OpportunityWrapper = styled.div`
    
    `;

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
    width: 500,
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