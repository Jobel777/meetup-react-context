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
    
    constructor(props) {
        super(props);
        }
        
    sendParametersDinamyc() {
        if (this.props.groupId !== undefined) {
            console.log('groupId '+this.props.groupId);
            let parameter = "groupId={this.props.groupId}";
            return parameter;
            }
        else {
            console.log('eventId '+this.props.match.params.theid);
            let parameter = 'eventId={this.props.match.params.theid}';
            return parameter;
        }
    }
        
    render(){
        

            
        return (
            <React.Fragment>
           
                <TopBar />
                <EventJumbotron />
                <EventDetails sendParametersDinamyc />
                <Footer />
      
            </React.Fragment>
             
        );
    }
}

MeetupEvent.propTypes = {
    groupId: PropTypes.number
    };

MeetupEvent.propTypes = {
    match: PropTypes.object
    };
