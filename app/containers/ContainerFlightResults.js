import React from 'react';
import { connect } from 'react-redux';
import FlightSearchResults from '../components/FlightSearchResults';
import { fetchFlights } from '../actions/Actions';

/*
    Our container is where we manage the data for our component.
*/

const mapStateToProps = (state, props) => {
    return {
        // flights: state.SearchPageReducer.testData.data,
        flights: state.SearchPageReducer.flights,
        filteredFlights: state.SearchPageReducer.filteredFlights
    }
}

const mapActionsToProps = {
    fetchFlights
}

// Since we're using Redux we need 'connect' here to pass state & actions
// to our stupid component via props
export default connect(mapStateToProps, mapActionsToProps)(FlightSearchResults)