import React from 'react';

// We code this in a Functional JavaScript format
// Since this component doesn't need state management,
// or lifecycle methods

import { PageHeader, Grid, Row, Col, Button, Modal } from 'react-bootstrap';

// The pieces that make up this page (note that most if not all of these are containers)
import FlightSearchFilter from '../containers/ContainerFlightSearchFilter';
import FlightSearchRefiner from '../containers/ContainerRefineFlightSearch';
import FlightSearchResults from '../containers/ContainerFlightResults';

const FlightSearchPage = (props) => {
    return (
        <div className="container">
            <Modal show={props.failedToSearch} onHide={props.acknowledge_search_fail}>
                <Modal.Header closeButton>
                    <Modal.Title>Search failed </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The search could not find any flights with those details.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.acknowledge_search_fail}>Close</Button>
                </Modal.Footer>
            </Modal>

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