import React from 'react';
import {connect } from 'react-redux';
import FlightSearchFilter from '../components/FlightSearchFilter';
import { filter_flights } from '../actions/Actions';

/*
    Our container is where we manage the data for our component.
*/

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapActionsToProps = {
    filter_flights
}

// Since we're using Redux we need 'connect' here to pass state & actions
// to our stupid component via props
export default connect(mapStateToProps,mapActionsToProps)(FlightSearchFilter)