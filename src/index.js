import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from "./Welcome";
import ActionButton from './ActionButton';
import Address from "./Address";

class MyApp extends React.Component {
    render() {
        return (
            <Router>
                <I18nextProvider i18n={i18n}>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route exact path="/action" component={ActionButton}/>
                        <Route exact path="/address/:type" component={Address}/>
                    </Switch>
                </I18nextProvider>
            </Router>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <MyApp/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
