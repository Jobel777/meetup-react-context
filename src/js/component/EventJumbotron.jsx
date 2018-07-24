import React from 'react';

import { Link } from "react-router-dom";
import { browserhistory } from "react-router";
import {Consumer} from "../stores/AppContext.jsx";

import Moment from "moment";

import PropTypes from 'prop-types';



function EventJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-right bg-dark">
                <Consumer>
                    {
                    ( {state} ) => { const event = state.events.find( event => event.ID === parseInt(props.eventId) );
                                                if (!event) {
                            return <p>Error Contact to Administrator</p>;
                        } else {
                            return (
                                <div className="row">
                                    <div className="col text-left">
                                        {/*<img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png"></img>*/}
                                        <h5>{Moment(event.post_date).format("MMMM DD")}</h5>
                                        <h1>{event.post_name} {props.eventId}</h1>
                                        <h4 className="text-primary">Meetup {props.eventId}</h4>
                                    </div>
                                    <div className="card text-white text-center bg-secondary mb-3">
                                        <div className="card-body">
                                            <h2 className="card-title">3 People Going</h2>
                                            <a href="#" className="btn btn-primary">Login to RSVP</a>
                                        </div>
                                    </div>
                                </div>);
                            }
                        } 
                    }
                </Consumer>
            </div>
        </div>
        );
}

EventJumbotron.propTypes = {
        eventId: PropTypes.string
    };


export default EventJumbotron;