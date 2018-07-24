import React from 'react';

import { Link } from "react-router-dom";
import { browserhistory } from "react-router";
import PropTypes from 'prop-types';

import TopBar from '../component/TopBar.jsx';
import GroupJumbotron from '../component/GroupJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';
import Footer from '../component/Footer.jsx';

//create your first component
export class MeetupGroup extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <TopBar />
                <GroupJumbotron groupId={this.props.match.params.theid} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h4>Next Events</h4>
                            <EventOverview groupId={this.props.match.params.theid}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
MeetupGroup.propTypes = {
    match: PropTypes.object
    };