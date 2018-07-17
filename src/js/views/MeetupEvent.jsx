import React from 'react';

import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { browserhistory } from "react-router";

import TopBar from '../component/TopBar.jsx';
import EventJumbotron from '../component/EventJumbotron.jsx';
import EventDetails from '../component/EventDetails.jsx';
import Footer from '../component/Footer.jsx';



//create your first component
export class MeetupEvent extends React.Component{
    
    render(){
        return (
            <React.Fragment>
           
                <TopBar />
                <EventJumbotron />
                <EventDetails eventId={this.props.match.params.theid} />
                <Footer />
      
            </React.Fragment>
             
        );
    }
}

MeetupEvent.propTypes = {
    match: PropTypes.object
    };
