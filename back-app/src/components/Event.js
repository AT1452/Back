import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {EventConsumer} from '../context';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress } from 'reactstrap';

import logo from "../logo.svg"
import CardFooter from 'reactstrap/es/CardFooter';
import PropTypes from 'prop-types';




export default class Event extends Component {

    render() {
        this.state = {
            count: 1,
        };
        const {id, name, hostname, date, inCart, image, city, budget, earned} = this.props.event;

        return (
            <EventWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <EventConsumer>
                    {(value) => (
                        <div>
                            <Card>
                                <Link to="/details">
                                    <CardImg top width="100%" src={image} alt="Card image cap" className="p-5" onClick={() => {value.handleDetails(id)}}/>
                                </Link>
                                <CardBody>
                                    <h2 style={eventNameStyle}>{name}</h2>
                                    <h5 style={companyStyle}>{hostname}</h5>
                                    <h5 style={dateStyle}>{date}</h5>
                                    <h5 style={companyStyle}>{city}</h5>
                                    <div className="text-center">${earned} Earned</div>
                                    <Progress value={(earned/budget)*100} animated={true}/>
                                    <div className="text-center">${budget} Needed</div>
                                </CardBody>
                            </Card>
                        </div>
                    )}
                </EventConsumer>
            </EventWrapper>
        );
    }
}

Event.propTypes = {
    event:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.number,
        name:PropTypes.string,
        date:PropTypes.string,
        company:PropTypes.string,
        city:PropTypes.string,
    }).isRequired
};

const EventWrapper = styled.div`
    
    `;

const dateStyle = {
    color: 'red',
};
const companyStyle = {
    color: '#6B6B6B'
};
const eventNameStyle = {
    color: '#000000'
};