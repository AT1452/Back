import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Sponsor({name, lookout, budget, spend, profile}) {
        return (
            <div className="sponsor-card">
                <img src={profile}/>
                <h3>{name}</h3>
                <p>{lookout}</p>
                <p className="budget-section">{spend}/{budget}</p>
            </div>
        );
}