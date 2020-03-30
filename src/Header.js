import React from 'react';
import {useTranslation} from "react-i18next";
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';

function Header() {
    const [onLine, setOnline] = React.useState(navigator.onLine);
    const [language, setLanguage] = React.useState('en');
    const {t, i18n} = useTranslation();

    // Online/Offline Event Detection
    const alertOnlineStatus = () => {
        setOnline(navigator.onLine)
    };
    window.addEventListener('online', alertOnlineStatus);
    window.addEventListener('offline', alertOnlineStatus);

    // Change Language
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
        i18n.changeLanguage(language === 'en' ? 'zh' : 'en').then(r => console.log(r));
    };

    return (
        <div className="App-header">
            <Tooltip title={t('github')}>
                <IconButton color="secondary" aria-label="github" size="medium">
                    <GitHubIcon style={{color: '#e6007a'}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title={t('network')}>
                <IconButton color="secondary" aria-label="network" size="medium">
                    {onLine ? <SentimentVeryDissatisfiedIcon style={{color: '#e6007a'}}/> :
                        <SentimentVerySatisfiedIcon style={{color: '#e6007a'}}/>}
                </IconButton>
            </Tooltip>
            <Tooltip title={t('language')} style={{marginRight: 10}}>
                <IconButton color="secondary" aria-label="settings" size="medium" onClick={toggleLanguage}>
                    <TranslateIcon style={{color: '#e6007a'}}/>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default Header;
