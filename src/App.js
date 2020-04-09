import React, {useEffect} from "react";
import logo from "./logo.png";
import './App.css';
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RefreshIcon from '@material-ui/icons/Refresh';
import {Header, CopyTextField} from "./Components";
import {BackButton, ReGenerateButton, WelcomeButton} from "./Buttons";
import Identicon from "@polkadot/react-identicon";
import Keyring from "@polkadot/keyring";
import {u8aToHex} from "@polkadot/util/u8a";
import {cryptoWaitReady} from "@polkadot/util-crypto/init";
import {mnemonicGenerate} from "@polkadot/util-crypto/mnemonic";
import SplitButton from "./SplitButton";
import {Tooltip} from "@material-ui/core";

const WelcomePage = React.memo(function () {
    const {t} = useTranslation();
    const history = useHistory();
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    const handleClick = () => {
        history.push("/choose")
    };

    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className={classes.welcome}>
                    <Typography>
                        {t('tip1')}
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} size="small" name="checkedA"/>}
                        label={t('yes')}
                        classes={{label: classes.labelPlacementEnd}}
                    />
                </div>
                <div className={classes.welcome}>
                    <Typography>
                        {t('tip2')}
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} size="small" name="checkedB"/>}
                        label={t('yes')}
                        classes={{label: classes.labelPlacementEnd}}
                    />
                </div>
                <WelcomeButton variant="contained"
                               color="secondary"
                               disabled={!(state.checkedA && state.checkedB)}
                               onClick={handleClick}
                >
                    {t('begin')}
                </WelcomeButton>
            </div>
        </div>
    )
});

const ChoosePage = React.memo(function () {
    const {t} = useTranslation();
    const history = useHistory();
    const [values, setValues] = React.useState({type: 'polkadot', keypair: 'sr25519'});

    const handleChoose = (value) => {
        if (value.indexOf('sr25519') !== -1) {
            setValues({...values, keypair: 'sr25519'});
        } else if (value.indexOf('ed25519') !== -1) {
            setValues({...values, keypair: 'ed25519'});
        } else if (value.indexOf('Polkadot') !== -1) {
            setValues({...values, type: 'polkadot'});
        } else {
            setValues({...values, type: 'kusama'});
        }
    };

    const handleClick = () => {
        history.push(`/address/:${values.type}/:${values.keypair}`)
    };

    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <SplitButton options={[t('generateKusama'), t('generatePolkadot')]} choose={handleChoose}/>
                <div style={{height: '7vh'}}/>
                <SplitButton options={['ed25519', 'sr25519']}
                             choose={handleChoose}
                             helper={t('helper')}/>
                <div style={{height: '7vh'}}/>
                <Tooltip title={t('generate')}>
                    <IconButton aria-label="generate" color="secondary" onClick={handleClick}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
});

const AddressPage = React.memo(function () {
    let {type, keypair} = useParams();
    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();

    const [{address, phrase, publicKey}, setValues] = React.useState({});
    const theme = 'polkadot';
    const size = 50;

    useEffect(() => {
        try {
            (async () => {
                setValues(await generateAddress(type.replace(':', ''), keypair.replace(':', '')));
            })()
        } catch (e) {
            throw new Error("Generate Address failed");
        }
    }, [type, keypair]);

    const goBack = () => {
        history.push('/choose')
    };

    const reGenerate = async () => {
        setValues(await generateAddress(type.replace(':', ''), keypair.replace(':', '')));
    };

    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <Identicon
                    value={address}
                    size={size}
                    theme={theme}
                />
                <div className={classes.item}>
                    <Typography className={classes.title}>
                        {t('address')}
                    </Typography>
                    <CopyTextField value={address}/>
                </div>
                <Divider light orientation="horizontal" variant="middle" className={classes.divider}/>
                <div className={classes.item}>
                    <Typography className={classes.title}>
                        {t('mnemonic')}
                    </Typography>
                    <Typography className={classes.tips}>
                        {t('tips')}
                    </Typography>
                    <CopyTextField value={phrase} multiline={true}/>
                </div>
                <Divider light orientation="horizontal" variant="middle" className={classes.divider}/>
                <div className={classes.item}>
                    <Typography className={classes.title}>
                        {t('publicKey')}
                    </Typography>
                    <CopyTextField value={publicKey} multiline={true}/>
                </div>
                <ReGenerateButton variant="outlined" color="secondary" onClick={reGenerate} startIcon={<RefreshIcon/>}>
                    {t('regenerate')}
                </ReGenerateButton>
                <BackButton color="secondary" onClick={goBack}>
                    {t('back')}
                </BackButton>
            </div>
        </div>
    );
});

const keyringEd25519 = new Keyring({type: 'ed25519'});
const keyringSr25519 = new Keyring({type: 'sr25519'});

function addressFromPhrase(phrase, type, keypair) {
    let keyring = (keypair === 'ed25519') ? keyringEd25519 : keyringSr25519;
    switch (type) {
        case 'polkadot':
            keyring.setSS58Format(0x00);
            break;
        case 'kusama':
            keyring.setSS58Format(0x02);
            break;
        default:
            keyring.setSS58Format(42);
            break;
    }
    const address = keyring.addFromMnemonic(phrase).address;
    const publicKey = u8aToHex(keyring.addFromMnemonic(phrase).publicKey);
    return {
        address,
        publicKey
    };
}

async function generateAddress(type, keypair) {
    const phrase = await mnemonicGenerate();// Mnemonic
    await cryptoWaitReady();
    const {address, publicKey} = await addressFromPhrase(phrase, type, keypair);
    return {
        address,
        phrase,
        publicKey
    };
}

const useStyles = makeStyles(theme => ({
    welcome: {
        width: '65vw',
    },
    item: {
        width: '70vw',
        display: 'flex',
        flexDirection: 'column'
    },
    divider: {
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(1),
        width: '70vw',
    },
    title: {
        color: '#7F7F7F',
        fontSize: 14
    },
    tips: {
        background: '#FF6666',
        opacity: '0.9',
        padding: '5px 10px',
        color: '#FFF',
        fontSize: 12,
        lineHeight: 2,
        borderRadius: 3,
        margin: '2px 0'
    },
    labelPlacementEnd: {
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
    },
    '@media screen and (max-width: 500px)': {
        welcome: {
            width: '80vw',
        },
        item: {
            width: '80vw',
        },
        divider: {
            width: '80vw',
        }
    }
}));

export {WelcomePage, ChoosePage, AddressPage};
