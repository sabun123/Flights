import React from 'react';

import { Panel, Row, Col, Button, Image } from 'react-bootstrap';

const FlightResult = (props) => {
    return (
        <Panel>
            <Panel.Body>
                {/* <div > */}
                    <Row>
                        <Col xs={2}>
                            <Image src={require('../../assets/mas.jpg')}
                                style={{width:'100%'}}
                            />
                        </Col>
                        <Col xs={2}>
                            <div>
                                <p>{props.arrivalFlightNo}</p>
                            </div>
                            <div><p>{props.arrivalFlightName}</p></div>
                            <div><p>Depart: {props.arrivalDepartTime}</p></div>
                            <div><p>Arrive: {props.arrivalArriveTime}</p></div>
                        </Col>
                        <Col xs={2}>
                            <div>
                                <p>{props.departureFlightNo}</p>
                            </div>
                            <div><p>{props.departureFlightName}</p></div>
                            <div><p>Depart: {props.departureDepartTime}</p></div>
                            <div><p>Arrive: {props.departureArrivalTime}</p></div>
                        </Col>
                        <Col xs={2}>
                            <div><p style={{fontWeight:"bold",fontSize:"x-large"}}>£{props.price}</p></div>
                        </Col>
                        <Col xs={1}>
                            <div><Button>Select This Flight</Button></div>
                        </Col>
                    </Row>
                {/* </div> */}
            </Panel.Body>
        </Panel>
    )
}

export default FlightResult;