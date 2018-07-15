import React from 'react';

// We code this in a Functional JavaScript format
// Since this component doesn't need state management,
// or lifecycle methods

import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

// The pieces that make up this page (note that most if not all of these are containers)
import FlightSearchFilter from '../containers/ContainerFlightSearchFilter';
import FlightSearchRefiner from '../containers/ContainerRefineFlightSearch';
import FlightSearchResults from '../containers/ContainerFlightResults';

const FlightSearchPage = (props) => {
    console.log("REACHED")
    return (
        <div className="container">
            <PageHeader>
                SkyPrice Search Engine
            </PageHeader>
            <Grid>
                <Row>
                    <Col xs={4}>
                        <FlightSearchFilter />
                        <FlightSearchRefiner />
                    </Col>
                    <Col xs={8}>
                        <FlightSearchResults />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default FlightSearchPage;