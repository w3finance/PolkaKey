import React from 'react';
import {useTranslation} from "react-i18next";
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
// import {clipboard} from "electron";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import {makeStyles} from "@material-ui/core/styles";

// const {shell} = require('electron');

const Header = React.memo(function () {
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

    const openGithub = () => {
        // shell.openExternal('https://github.com/w3finance/PolkaKey').then(r => console.log(r))
    };

    return (
        <div className="App-header">
            <Tooltip title={t('github')}>
                <IconButton color="secondary" aria-label="github" size="medium" onClick={openGithub}>
                    <GitHubIcon style={{color: '#e6007a'}} fontSize="small"/>
                </IconButton>
            </Tooltip>
            <Tooltip title={onLine ? t('network2') : t('network1')}>
                <IconButton color="secondary" aria-label="network" size="medium">
                    {onLine ? <SentimentVeryDissatisfiedIcon style={{color: '#e6007a'}}/> :
                        <SentimentVerySatisfiedIcon style={{color: '#e6007a'}}/>}
                </IconButton>
            </Tooltip>
            <Tooltip title={t('language')} style={{marginRight: 10}}>
                <IconButton color="secondary" aria-label="settings" size="medium" onClick={toggleLanguage}>
                    <LanguageIcon style={{color: '#e6007a'}}/>
                </IconButton>
            </Tooltip>
        </div>
    )
});

const CopyTextField = React.memo(function (props) {
    const {value, multiline} = props;
    const classes = useStyles();
    const {t} = useTranslation();

    const copy = () => {
        // clipboard.writeText(value, 'clipboard');
    };

    return (
        <Paper className={classes.root} classes={{elevation1: classes.elevation1}}>
            <InputBase
                readOnly
                value={value}
                className={classes.input}
                classes={{input: classes.input1}}
                multiline={multiline}
                rows={multiline ? 2 : 1}
            />
            <Tooltip title={t('copy')}>
                <IconButton color="secondary"
                            className={classes.iconButton}
                            aria-label="copy"
                            onClick={copy}
                >
                    <FileCopyIcon style={{color: '#670d35', opacity: '0.8',}} fontSize="small"/>
                </IconButton>
            </Tooltip>
        </Paper>
    );
});

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        width: '70vw'
    },
    elevation1: {
        boxShadow: 'none',
        background: '#F3EBF1',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    input1: {
        color: '#670d35',
        fontSize: 15
    },
    iconButton: {
        padding: 10,
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '80vw',
        }
    }
}));

export {Header, CopyTextField};
