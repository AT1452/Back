import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {EventConsumer} from '../context';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../logo.svg"




export default class Event extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.event;

        return (
            <EventWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div>
                    <Link to="/details">
                        <Card>
                            <CardImg top width="100%" src={logo} alt="Card image cap" className="p-5"/>
                            <CardBody>
                                <h2 style={eventNameStyle}>Event Name</h2>
                                <h5 style={companyStyle}>by Company</h5>
                                <h5 style={dateStyle}>01/02/03</h5>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            </EventWrapper>
        );
    }
}

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