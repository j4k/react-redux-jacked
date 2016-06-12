import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import BasePage from './containers/BasePage';
import NotFoundPage from './components/NotFoundPage.js';
import ErrorPage from './components/ErrorPage.js';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BasePage} />
        <Route path="opps" component={ErrorPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
