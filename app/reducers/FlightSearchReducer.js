import {
    REQUEST_FLIGHTS,
    RECEIVE_FLIGHTS,
    FILTER_FLIGHTS,
    ACKNOWLEDGE_SEARCH_FAIL
} from '../actions/Actions';

const initialState = {
    requestInProgress: false,
    flights: {},
    filteredFlights: {},
    failedToSearch: false
}

export function SearchPageReducer(state = initialState, action) {
    switch (action.type) {
        case ACKNOWLEDGE_SEARCH_FAIL:
            return Object.assign({}, state, {
                failedToSearch: action.failedToSearch
            })
            break;
        case REQUEST_FLIGHTS:
            return Object.assign({}, state, {
                requestInProgress: action.requestInProgress
            })
            break;
        case RECEIVE_FLIGHTS:
            return Object.assign({}, state, {
                requestInProgress: action.requestInProgress,
                flights: action.flightData
            })
            break;
        case FILTER_FLIGHTS:
            let searchedFlightNo = action.parameterObject.flight_no;
            let filteredResults = [];
            let searchFailed = false;
            // Filter the flights based on the given 
            if (action.parameterObject.flight_no != "") {
                filteredResults = state.flights.data.filter((flight) => {
                    // Let's check if the flight no matches the searched query
                    if (flight.departure_flight.flight_no == searchedFlightNo || flight.arrival_flight.flight_no == searchedFlightNo) {
                        // If it does, we want to return it
                        return flight;
                    }
                })
            }

            if (filteredResults.length <= 0) {
                // We have to notify the UI so it can alert the user accordingly that the search didn't find anything
                searchFailed = true;
            }

            return Object.assign({}, state, {
                filteredFlights: filteredResults,
                failedToSearch: searchFailed
            })
            break;
        default:
            return state
    }
}