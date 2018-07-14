import React from 'react';
import ReactDOM from 'react-dom';

// Route packages
import {Provider} from 'react-redux';
import {Route,Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

/*
    Our app's JavaScript/React entry point into the HTML file.
    Here we will also define routes, which could later on be used for multiple
    pages within our SPA.
*/

ReactDOM.render(
    <div>Test</div>,
    document.getElementById("entrypoint")
)