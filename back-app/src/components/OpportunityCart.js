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



export default class Opportunity extends Component {


    render() {
        const {id, name, desc, usd, inCart} = this.props.opportunity;
        console.log(this.props.opportunity);


        return (
            <OpportunityWrapper className="mx-auto">
                <div className="mx-auto">
                    <Card style={cardStyle}>
                        <CardBody>
                            <p style={eventNameStyle}>{name}</p>
                            <p style={companyStyle}>{desc}</p>
                            <div className="row">
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