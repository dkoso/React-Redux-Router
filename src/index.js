import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllTickets from './containers/ticket-all';

import reducers from './reducers';

import Header from './components/header';
import TicketInput from './containers/ticket-input';
import TicketOutput from './containers/ticket-output';
import TicketListDetail from './containers/ticket-list-detail';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <TicketInput />
                    <TicketOutput />
                </div>
                <TicketListDetail />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/all" component={AllTickets} />
            <Route path="/" component={App} />
        <App />
        </Switch>
    </div>
    </BrowserRouter>
    </Provider>
    // eslint-disable-next-line
    , document.getElementById('root'));
