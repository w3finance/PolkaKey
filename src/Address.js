import React from 'react';
import './App.css';
import {useTranslation} from "react-i18next";
import Header from "./Header";

function Address() {
    const {t} = useTranslation();
    return (
        <div className="App">
            <Header/>
            <div className="Container">
                Address
            </div>
        </div>
    );
}

export default React.memo(Address);
