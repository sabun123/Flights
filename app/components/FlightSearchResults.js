import React from 'react';
import FlightResult from './FlightResult';
import { Row, Col } from 'react-bootstrap';

class FlightSearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    createFlightOptions = (props) => {
        if(props.flights && props.flights.length > 0){
            return props.flights.map((flightData,index)=>{
                return <FlightResult 
                    key={index}
                    arrivalFlightName={flightData.arrival_flight.flight_name}
                    arrivalArriveTime={flightData.arrival_flight.arrive_time}
                    arrivalDepartTime={flightData.arrival_flight.depart_time}
                    arrivalFlightNo={flightData.arrival_flight.flight_no}
                    departureFlightName={flightData.departure_flight.flight_name}
                    departureArrivalTime={flightData.departure_flight.arrive_time}
                    departureDepartTime={flightData.departure_flight.depart_time}
                    departureFlightNo={flightData.departure_flight.flight_no}
                    price={flightData.price}
                />
            })
        } else {
            // No data was received so no components can be made.
            return null;
        }
        
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