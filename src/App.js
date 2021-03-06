import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store, {rrfProps} from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';

import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Router>
                        <div className="App">
                            <AppNavbar />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" component={Dashboard} />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </ReactReduxFirebaseProvider>
            </Provider>
        );
    }
}

export default App;
