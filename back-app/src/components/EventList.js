import React, {Component} from 'react';
import Event from './Event'
import Title from "./Title"
import "bootstrap/dist/css/bootstrap.min.css"


export default class EventList extends Component {
    state={
        events:[]
    };

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title title="Events"/>
                            <div className="row">

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}