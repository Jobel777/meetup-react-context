import React from 'react';
import {Consumer} from "../stores/AppContext.jsx";
import moment from 'moment';
import { Link } from "react-router-dom";
import { browserhistory } from "react-router";
import $ from "jquery";

import PropTypes from 'prop-types';

import Moment from "moment";
//import ReactGA from 'react-ga';

function EventOverview(props){
    
    return (
        <Consumer>
            {
            ({ state }) => {
            
            
                let eventList = state.events;
                if(props.groupId){                
                     
                    eventList = state.events.filter(items => items.meta_keys._meetup === props.groupId);
                        
                }
                
                    return (
                        eventList.map((event, index) => {
                            return (<div className="card mb-4" key={event.ID}>
                                <h2 className="card-header">{moment(event.post_date).format("MMMM DD")}</h2>
                                <div className="row pt-3">
                                    <div className="col-4 text-center">
                                        <h3>{moment(event.post_date).format("h:mm a")}</h3>
                                    </div>
                                    <div className="col">
                                        <h4><Link to={"/event/"+event.ID}>{event.post_title}</Link></h4>
                                        <p><Link to={"/group/"+event.meta_keys._meetup}>Meetup {event.meta_keys._meetup}</Link></p>
                                    </div>
                                </div>
                            </div>);
                            }
                        )
                    );
            }
            } 
        </Consumer>
    );
}

EventOverview.propTypes  = {
    groupId: PropTypes.string
    };
    
EventOverview.defaultProps = {
  groupId: null
};

export default EventOverview;