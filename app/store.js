/*
    Our singular source of truth, the Redux Store.
*/
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import reduxThunk from 'redux-thunk';
import {SearchPageReducer} from './reducers/FlightSearchReducer';

// Our browser's history object (for moving forward/back between pages)
const history = createHistory();

// Since we're using redux, we need to modify the history
// object to allow our containers to work with react router
const middleware = routerMiddleware(history);

// Allow myself to see state changes in console in a clean manner
const logger = createLogger({
    collapsed: true
})

// Create our store, which is basically an amalgamation of our reducers (combineReducers)
// mixed with some options/functionality we want (applyMiddleware)
const store = createStore(
    combineReducers({
        SearchPageReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware,reduxThunk,logger)
)

export default store;