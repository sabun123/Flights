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
                                <p>{props.flightName}</p>
                            </div>
                            <div><p>{props.flightPathThere}</p></div>
                            <div><p>Depart: {props.depart}</p></div>
                            <div><p>Arrive: {props.arrive}</p></div>
                        </Col>
                        <Col xs={2}>
                            <div>
                                <p>{props.flightName}</p>
                            </div>
                            <div><p>{props.flightPathReturn}</p></div>
                            <div><p>Depart: {props.depart}</p></div>
                            <div><p>Arrive: {props.arrive}</p></div>
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