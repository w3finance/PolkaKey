import React, {useEffect} from 'react';
import './App.css';
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import Header from "./Header";
import Typography from "@material-ui/core/Typography";
import Keyring from '@polkadot/keyring'
import {mnemonicGenerate, mnemonicToSeed} from '@polkadot/util-crypto/mnemonic';
import {cryptoWaitReady} from "@polkadot/util-crypto/init";
import {u8aToHex} from "@polkadot/util/u8a";
import Identicon from '@polkadot/react-identicon';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';
import CopyTextField from "./CopyTextField";
import {ReGenerateButton, BackButton} from "./Buttons";
import {useHistory} from "react-router-dom";

function Address() {
    let {type} = useParams();
    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();

    const [{address, phrase, seed}, setValues] = React.useState({});
    const theme = 'polkadot';
    const size = 50;

    useEffect(() => {
        try {
            (async () => {
                setValues(await generateAddress(type.replace(':', ''), 'sr25519'));
            })()
        } catch (e) {
            throw new Error("Generate Address failed");
        }
    }, [type]);

    const goBack = () => {
        history.push('/action')
    };

    const reGenerate = async () => {
        setValues(await generateAddress(type.replace(':', ''), 'sr25519'));
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
                        {`Polkadot Address`}
                    </Typography>
                    <CopyTextField value={address}/>
                </div>
                <Divider light orientation="horizontal" variant="middle" className={classes.divider}/>
                <div className={classes.item}>
                    <Typography className={classes.title}>
                        {`Mnemonic`}
                    </Typography>
                    <CopyTextField value={phrase}/>
                </div>
                <Divider light orientation="horizontal" variant="middle" className={classes.divider}/>
                <div className={classes.item}>
                    <Typography className={classes.title}>
                        {`Private Key`}
                    </Typography>
                    <CopyTextField value={seed}/>
                </div>
                <ReGenerateButton variant="contained" color="secondary" onClick={reGenerate}>
                    {'重新生成'}
                </ReGenerateButton>
                <BackButton color="secondary" onClick={goBack}>
                    {'返回'}
                </BackButton>
            </div>
        </div>
    );
}

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
    return keyring.addFromMnemonic(phrase).address;
}

async function generateAddress(type, keypair) {
    const phrase = await mnemonicGenerate();// Mnemonic
    await cryptoWaitReady();
    const address = await addressFromPhrase(phrase, type, keypair);
    const seed = u8aToHex(await mnemonicToSeed(phrase));
    return {
        address,
        phrase,
        seed
    };
}

const useStyles = makeStyles(theme => ({
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
    }
}));

export default React.memo(Address);
