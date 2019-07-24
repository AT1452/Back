import React, { Component } from "react";
import { EventConsumer } from '../context';
import { Link } from 'react-router-dom';
import Event from './EventList';
import Opportunity from './Opportunity'
import firebase from './Firestore'




export default class Details extends Component {
    constructor(props)
    {
        super();
    }
    passEventName()
    {
        alert("Hello");
    }
      
    render(){
        return (
            <EventConsumer>
                {(value) => {
                        console.log('ooga booga')
                        console.log(value);
                        
                        const {id, name, image, hostname, desc, inCart, opps, contact,} = value.details;
                        // const oppsDisplay = opps.map(opp => (
                        //     <Opportunity opportunity={opp}/>
                        // ));
                        let oppArray = [];
                        for(let x=0; x<opps.length; x++){
                            oppArray.push(opps[x])
                            
                        }
                        console.log("oppAraay below");
                        const oppsDisplay = oppArray.map(opp => (
                            <Opportunity opportunity={opp} passEventName={name}></Opportunity>
                        ));

                        return(
                            <div className = "container py-5">
                                {/*title*/}
                                <div className="row">
                                    <div className = ".col-10.mx-auto text-center text-slanted text-blue my-5">
                                        <h1 style={{"paddingLeft": 5}}>{name}</h1>
                                    </div>
                                </div>
                                {/*end title*/}
                                {/*product info*/}
                                <div className = "row">
                                    <div className = "col-10 col-md-6">
                                        <img src = {image} className="img-fluid" alt="product"/>
                                    </div>
                                    {/*product text*/}
                                    <div className = "col-10 mx-auto col-md-6 my-3 text -capitalize">
                                        <h4 className = "text-title text-uppercase text-muted mt-3 mb-2">
                                            Hosted by: <span className = "text-uppercase">{hostname}</span>
                                        </h4>
                                        <h3>{contact}</h3>
                                        <p className = "text-muted lead">{desc}</p>
                                        {/* buttons */}
                                        <ul style={ulStyle}>{oppsDisplay}</ul>
                                        <div>
                                            <Link to = "/">
                                                <button style={backButton}>
                                                    Back to Events
                                                </button>
                                            </Link>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    }
                }
            </EventConsumer>
        );
    }
}

const ulStyle = {
    padding: 0
};

const backButton = {
    background: "transparent",
    borderColor: "blue",
    borderRadius: "10px"
};