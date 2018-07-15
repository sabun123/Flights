import React from 'react';
import FlightResult from './FlightResult';
import { Row, Col } from 'react-bootstrap';

class FlightSearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    createFlightOptions = (props) => {
        let testData = {1:1,2:2,3:3,4:4,5:5};
        return Object.keys(testData).map((flightData,index)=>{
            return <FlightResult 
                key={index}
                flightName={"AI-202"}
                flightPathThere={"PNQ > DEL"}
                flightPathReturn={"PNQ > DEL"}
                arrive={"10:00AM"}
                depart={"12:00PM"}
                price={"125.00"}
            />
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <p>Your Results</p>
                <Row>
                    <Col xs={4}><p>Depart:</p></Col>
                    <Col><p>1st Jan 2014</p></Col>
                </Row>
                <Row>
                    <Col xs={4}><p>Return:</p></Col>
                    <Col><p>10th Jan 2014</p></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        {this.createFlightOptions(this.props)}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FlightSearchResults;