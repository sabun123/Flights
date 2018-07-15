import React from 'react';
import {connect } from 'react-redux';
import FlightSearchResults from '../components/FlightSearchResults';

/*
    Our container is where we manage the data for our component.
*/

const mapStateToProps = (state, props) => {
    return {
        flights: state.SearchPageReducer.testData.data
    }
}

const mapActionsToProps = {
    
}

// Since we're using Redux we need 'connect' here to pass state & actions
// to our stupid component via props
export default connect(mapStateToProps,mapActionsToProps)(FlightSearchResults)