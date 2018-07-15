import React from 'react';
import FlightResult from './FlightResult';
import { Row, Col } from 'react-bootstrap';

class FlightSearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // on first time mount, we check if there's data or not.
        // If there isn't, then we need to grab some from the Mocky.io API
        if (this.props.flights && Object.keys(this.props.flights).length <= 0) {
            this.props.fetchFlights();
        }
    }


    createFlightOptions = (props) => {
        let flightData;

        if (this.props.filteredFlights && this.props.filteredFlights.length > 0) {
            // prioritize using filtered data first
            flightData = this.props.filteredFlights;
        } else if (this.props.flights && this.props.flights.data) {
            // there is no filtered data, so show all
            flightData = this.props.flights.data
        }

        if (flightData && flightData.length > 0) {
            return flightData.map((flightData, index) => {
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
            <div >
                <p>Your Results</p>
                <Row>
                    <Col xs={4}><p>Depart: 1st Jan 2014</p></Col>
                </Row>
                <Row>
                    <Col xs={4}><p>Return: 10th Jan 2014</p></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div>
                            {this.createFlightOptions(this.props)}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FlightSearchResults;