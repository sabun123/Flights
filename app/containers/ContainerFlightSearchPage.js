import React from 'react';
import { connect } from 'react-redux';
import FlightSearchPage from '../components/FlightSearchPage';
import {acknowledge_search_fail} from '../actions/Actions';

/*
    Our container is where we manage the data for our component.
*/

const mapStateToProps = (state, props) => {
    return {
        failedToSearch: state.SearchPageReducer.failedToSearch
    }
}

const mapActionsToProps = {
    acknowledge_search_fail
}

// Since we're using Redux we need 'connect' here to pass state & actions
// to our stupid component via props
export default connect(mapStateToProps, mapActionsToProps)(FlightSearchPage)