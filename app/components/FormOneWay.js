import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { Panel, MenuItem, Button, FormControl, ControlLabel } from 'react-bootstrap';

class FormOneWay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            destination: "",
            flight_no: ""
        }
    }

    fromOnInput(e) {
        this.setState({ from: e.target.value.toUpperCase() })
    }

    destinationOnInput(e) {
        this.setState({ destination: e.target.value.toUpperCase() })
    }

    flightNoInput(e) {
        this.setState({ flight_no: e.target.value.toUpperCase() })
    }

    searchClicked() {
        this.props.filter_flights({
            flight_no: this.state.flight_no
        });
    }

    render() {
        return (
            <Panel>
                <Panel.Body>
                    <div>
                        <div>
                            <ControlLabel>From</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.from}
                                placeholder=""
                                onChange={this.fromOnInput.bind(this)}
                            />
                        </div>
                        <div>
                            <ControlLabel>Destination</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.from}
                                placeholder=""
                                onChange={this.destinationOnInput.bind(this)}
                            />
                        </div>
                        <div>
                            <ControlLabel>Departure Date</ControlLabel>
                            <DatePicker />
                        </div>
                        <div>
                            <ControlLabel>Passengers</ControlLabel>
                            <FormControl componentClass="select" placeholder="0">
                                <option value="0" key="0a">0</option>
                                <option value="1" key="1a">1</option>
                                <option value="2" key="2a">2</option>
                                <option value="3" key="3a">3</option>
                                <option value="4" key="4a">4</option>
                            </FormControl>
                        </div>
                        <div>
                            <ControlLabel>Flight No</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.flight_no}
                                placeholder="e.g AI-202"
                                onChange={this.flightNoInput.bind(this)}
                            />
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "5%" }}>
                        <Button onClick={this.searchClicked.bind(this)}>Search</Button>
                    </div>
                </Panel.Body>
            </Panel>

        )
    }
}

export default FormOneWay;