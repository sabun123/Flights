import React from 'react';
import { Panel, SplitButton, MenuItem, Button } from 'react-bootstrap';

const FormReturn = (props) => {
    return (
        <Panel>
            <Panel.Body>
                <div>
                    <p>From</p>
                    <input placeholder="e.g PNQ"/>
                    <p>Destination</p>
                    <input placeholder="e.g DEL"/>
                    <p>Departure Date</p>
                    <p>Return Date</p>
                    <p>Passengers</p>
                    <SplitButton
                        // bsStyle={title.toLowerCase()}
                        title={"Passengers"}
                        key={4}
                        id={`split-button-basic-${4}`}
                    >
                        <MenuItem eventKey="1">1</MenuItem>
                        <MenuItem eventKey="2">2</MenuItem>
                        <MenuItem eventKey="3">3</MenuItem>
                        <MenuItem eventKey="4">4</MenuItem>
                    </SplitButton>
                </div>
                <div style={{ textAlign: "center", marginTop:"5%" }}>
                    <Button>Search</Button>
                </div>
            </Panel.Body>
        </Panel>

    )
}

export default FormReturn;