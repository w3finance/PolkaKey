import React from 'react';
import './App.css';
import Header from "./Header";
import AddIcon from '@material-ui/icons/Add';
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {GenerateButton} from "./Buttons";

function ActionButton() {
    const {t} = useTranslation();
    const history = useHistory();

    const handleClicks = (type) => {
        history.push(`/address/:${type}`)
    };

    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <GenerateButton
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon/>}
                    onClick={() => {
                        handleClicks('polkadot')
                    }}
                >
                    {t('generatePolkadot')}
                </GenerateButton>
                <GenerateButton
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon/>}
                    onClick={() => {
                        handleClicks('kusama')
                    }}
                >
                    {t('generateKusama')}
                </GenerateButton>
            </div>
        </div>
    );
}

export default React.memo(ActionButton);
