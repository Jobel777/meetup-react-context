import React from 'react';

import TopBar from '../component/TopBar.jsx';
import HomeJumbotron from '../component/HomeJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';
import Footer from '../component/Footer.jsx';

import { Link } from "react-router-dom";
import { browserhistory } from "react-router";
import PropTypes from 'prop-types';


//create your first component
export class MeetupHome extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <TopBar />
                <HomeJumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <EventOverview groupId={undefined} />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

MeetupHome.propTypes = {
    match: PropTypes.object
    };
