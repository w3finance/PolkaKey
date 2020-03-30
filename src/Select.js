import React from 'react';
import './App.css';
import Header from "./Header";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

function Select() {
    const {t} = useTranslation();
    const history = useHistory();

    const handleClicks = (type) => {
        history.push("/address")
    };

    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={handleClicks('polkadot')}
                >
                    {t('generatePolkadot')}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={handleClicks('kusama')}
                >
                    {t('generateKusama')}
                </Button>
            </div>
        </div>
    );
}

export default React.memo(Select);
