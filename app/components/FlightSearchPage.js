import React from 'react';

// We code this in a Functional JavaScript format
// Since this component doesn't need state management,
// or lifecycle methods

import {} from 'react-bootstrap';

// The pieces that make up this page (note that most if not all of these are containers)
import FlightSearchFilter from '../containers/ContainerFlightSearchFilter';
import FlightSearchRefiner from '../containers/ContainerRefineFlightSearch';
import FlightSearchResults from '../containers/ContainerFlightResults';

const FlightSearchPage = (props) => {
    console.log("REACHED")
    return (
        <div className="container">
            This will contain the Flight Search Page
            <FlightSearchFilter/>
            <FlightSearchRefiner />
            <FlightSearchResults />
        </div>
    )
}

export default FlightSearchPage;