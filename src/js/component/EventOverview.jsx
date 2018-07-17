import React from 'react';

import {Consumer} from "../stores/AppContext.jsx";

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
                (state.events.map((value, index) => {
                console.log(value.ID+' '+index+' '+value.post_date+' '+value.ID );
                    return (<div className="card mb-4" key={index}>
                        <h2 className="card-header">{value.post_date}</h2>
                        <div className="row pt-3">
                            <div className="col-4 text-center">
                                <h3>{value.post_date}</h3>
                            </div>
                            <div className="col">
                                
                                <h4><Link to={"/event/"+value.ID}>{value.post_title}</Link></h4>
                                <p><Link to={"/group/"+value.ID}>{value.ID}</Link></p>
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