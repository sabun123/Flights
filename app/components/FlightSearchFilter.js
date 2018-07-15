import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FormOneWay from '../components/FormOneWay';
import FormReturn from '../components/FormReturn';

class FlightSearchFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabs defaultActiveKey={1} id="filter-tab" >
                <Tab eventKey={1} title="One way">
                    <FormOneWay {...this.props} />
                </Tab>
                <Tab eventKey={2} title="Return">
                    <FormReturn {...this.props} />
                </Tab>
            </Tabs>
        )
    }
}

export default FlightSearchFilter;