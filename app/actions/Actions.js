import { get } from "https";

export const REQUEST_FLIGHTS = "REQUEST_FLIGHTS";
export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";
export const FILTER_FLIGHTS = "FILTER_FLIGHTS";

export function filter_flights(parameterObject){
    return {
        type: FILTER_FLIGHTS,
        parameterObject:parameterObject
    }
}

function request_flights(){
    return {
        type: REQUEST_FLIGHTS,
        requestInProgress: true
    }
}

function receive_flights(json){
    return {
        type: RECEIVE_FLIGHTS,
        flightData: json
    }
}

export function fetchFlights(){
    return function(dispatch){
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