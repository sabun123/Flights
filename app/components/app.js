import React from 'react';
import ReactDOM from 'react-dom';

// Route packages
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// Store and history
import store from '../store';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// Our pages
import FlightSearchPage from './FlightSearchPage';
/*
    Our app's JavaScript/React entry point into the HTML file.
    Here we will also define routes, which could later on be used for multiple
    pages within our SPA.
*/

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={FlightSearchPage}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("entrypoint")
)