import { get } from "axios";

export const REQUEST_FLIGHTS = "REQUEST_FLIGHTS";
export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";
export const FILTER_FLIGHTS = "FILTER_FLIGHTS";
export const ACKNOWLEDGE_SEARCH_FAIL = "ACKNOWLEDGE_SEARCH_FAIL";

export function acknowledge_search_fail(){
    return {
        type: ACKNOWLEDGE_SEARCH_FAIL,
        failedToSearch: false
    }
}

export function filter_flights(parameterObject) {
    return {
        type: FILTER_FLIGHTS,
        parameterObject: parameterObject
    }
}

function request_flights() {
    return {
        type: REQUEST_FLIGHTS,
        requestInProgress: true
    }
}

function receive_flights(json) {
    return {
        type: RECEIVE_FLIGHTS,
        requestInProgress: false,
        flightData: json
    }
}

export function fetchFlights() {
    return function (dispatch) {
        dispatch(request_flights())

        let URL = `http://www.mocky.io/v2/5b489ce92f00005f0f48196c`;

        return get(URL)
            .then(
                response => response.data,
                error => console.log("Failed to get flights from mocky.io API")
            )
            .then(
                json => dispatch(receive_flights(json))
            )
    }
}