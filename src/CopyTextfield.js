import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';
import {clipboard} from 'electron';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        width: '70vw'
    },
    elevation1: {
        boxShadow: 'none',
        background: '#F2F4F7',
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
    }
}));

export default function CopyTextField(props) {
    const {value, multiline} = props;
    const classes = useStyles();

    const copy = () => {
        clipboard.writeText(value, 'clipboard');
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
            <Tooltip title={'Click to Copy'}>
                <IconButton color="secondary"
                            className={classes.iconButton}
                            aria-label="copy"
                            onClick={copy}
                >
                    <FileCopyIcon style={{color: '#670d35'}}/>
                </IconButton>
            </Tooltip>
        </Paper>
    );
}
