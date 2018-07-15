import React from 'react';

import { Panel, Grid, Row, Col } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';

const FlightSearchRefiner = (props) => {
    return (
        <div className="container-fluid">
            <Row>
                <Col xs={12}>
                    <p>Refine Flight Search</p>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <div >
                        £0
                        </div>
                </Col>
                <Col xs={6}>
                    <div style={{ textAlign: "right" }}>
                        £200
                        </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>
                        <ReactBootstrapSlider
                            value={0}
                            //change={}
                            max={200}
                            min={0}
                            orientation="horizontal"
                            reversed={false}
                            disabled="false"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FlightSearchRefiner;