import {
    REQUEST_FLIGHTS,
    RECEIVE_FLIGHTS,
    FILTER_FLIGHTS
} from '../actions/Actions';

const initialState = {
    flights:{},
    testData:{
        "data": [{
            "flight_id": "111",
            "departure_flight": {
                "flight_no": "AI-202",
                "flight_name": "PNQ > DEL",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "arrival_flight": {
                "flight_no": "AI-203",
                "flight_name": "DEL > PNQ",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "price": "125.00"
        }, {
            "flight_id": "112",
            "departure_flight": {
                "flight_no": "AI-205",
                "flight_name": "PNQ > DEL",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "arrival_flight": {
                "flight_no": "AI-204",
                "flight_name": "DEL > PNQ",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "price": "125.00"
        }, {
            "flight_id": "112",
            "departure_flight": {
                "flight_no": "AI-206",
                "flight_name": "PNQ > DEL",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "arrival_flight": {
                "flight_no": "AI-207",
                "flight_name": "DEL > PNQ",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "price": "125.00"
        }, {
            "flight_id": "112",
            "departure_flight": {
                "flight_no": "AI-208",
                "flight_name": "PNQ > DEL",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "arrival_flight": {
                "flight_no": "AI-209",
                "flight_name": "DEL > PNQ",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "price": "125.00"
        }, {
            "flight_id": "112",
            "departure_flight": {
                "flight_no": "TZ-210",
                "flight_name": "PNQ > DEL",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "arrival_flight": {
                "flight_no": "MD-212",
                "flight_name": "DEL > PNQ",
                "depart_time": "10:00 AM",
                "arrive_time": "12:00 PM"
            },
            "price": "125.00"
        }]
    }
}

export function SearchPageReducer(state = initialState, action){
    switch(action.type){
        case REQUEST_FLIGHTS:
            break;
        case RECEIVE_FLIGHTS:
            break;
        case FILTER_FLIGHTS:
            console.log("Whats action.parameterObject ", action.parameterObject)
            break;
        default:
            return state
    }
}