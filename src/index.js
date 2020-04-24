// Copyright 2020 W3 Finance authors & contributors

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {WelcomePage, ChoosePage, AddressPage} from "./App";

class MyApp extends React.Component {
    render() {
        return (
            <Router>
                <I18nextProvider i18n={i18n}>
                    <Switch>
                        <Route exact path="/" component={WelcomePage}/>
                        <Route exact path="/choose" component={ChoosePage}/>
                        <Route exact path="/address/:type/:keypair" component={AddressPage}/>
                    </Switch>
                </I18nextProvider>
            </Router>
        );
    }
}

const renderReact = () => {
    ReactDOM.render(<MyApp/>, document.getElementById('root'));
};

if (window.cordova) {
    document.addEventListener('deviceready', () => {
        renderReact();
    }, false);
} else {
    renderReact();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
