import React from 'react';

import {Consumer} from "../stores/AppContext.jsx";
import moment from 'moment';
import { Link } from "react-router-dom";
import { browserhistory } from "react-router";
import $ from "jquery";

import Moment from "moment";
//import ReactGA from 'react-ga';



function EventOverview(props){

    return (
        <Consumer>
            {
            ({ state }) => 
                (state.events.map((event, index) => {
                    const getNestedObject = (nestedObj, pathArr) => {
                    return pathArr.reduce((obj, key) =>
                            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
                    };
                    return (<div className="card mb-4" key={event.ID}>
                        <h2 className="card-header">{moment(event.post_date).format("MMMM DD")}</h2>
                        <div className="row pt-3">
                            <div className="col-4 text-center">
                                <h3>{moment(event.post_date).format("h:mm a")}</h3>
                            </div>
                            <div className="col">
                                <h4><Link to={"/event/"+event.ID}>{event.post_title}</Link></h4>
                                {/*<p><Link to={"/group/"+event.ID}>Meetup {((event || {}).meta_keys || {})._meetup}</Link></p>*/}
                                {/*<p><Link to={"/group/"+event.ID}>Meetup {getNestedObject(event, ['meta_keys', '_meetup'])}</Link></p>*/}
                                {/*<p><Link to={"/group/"+event.ID}>Meetup {getNestedObject(event, ['meta_keys', '_rsvpYes', 0])}</Link></p>*/}
                                <p><Link to={"/group/"+event.ID}>Meetup {(event, 'meta_keys._rsvpYes[1]').safeObject}</Link></p>
                            </div>
                        </div>
                    </div>);}))} 
        </Consumer>
    );
}

/*BlogJumbotron.propTypes = {
        title: PropTypes.string,
        subHeadline: PropTypes.string
    };*/

export default EventOverview;