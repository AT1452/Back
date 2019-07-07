import React, {Component} from 'react';
import Sponsor from './Sponsor'
import Title from "./Title"
import "bootstrap/dist/css/bootstrap.min.css"


export default class SponsorList extends Component {
    state={
        events:[]
    };
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title title="Sponsors"/>
                            <Sponsor name="Abhi" budget="5" spend="6" profile="https://images.unsplash.com/photo-1558980394-34764db076b4" lookout="something"/>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}