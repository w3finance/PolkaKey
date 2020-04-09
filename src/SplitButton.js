import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {withStyles} from "@material-ui/core/styles";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Tooltip from "@material-ui/core/Tooltip";

export default function SplitButton(props) {
    const {options, choose, helper} = props;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        choose(options[index]);
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid container direction="column" alignItems="center" style={{marginLeft: helper ? 24+5 : 0}}>
            <Grid item xs={12} style={{display: 'flex', overflow: 'hidden'}} alignItems="center">
                <CustomButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="split button"
                             style={{zIndex: 1}}>
                    <LeftButton color="secondary" disableRipple disableFocusRipple onClick={handleClick}>{options[selectedIndex]}</LeftButton>
                    <ArrowButton
                        color="secondary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon/>
                    </ArrowButton>
                </CustomButtonGroup>
                { helper ? <Tooltip title={helper} style={{marginLeft: 5}}><HelpOutlineIcon color="secondary"/></Tooltip> : null}
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal
                        style={{zIndex: 2}}>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <CustomMenuList id="split-button-menu">
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </CustomMenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
}

const CustomButtonGroup = withStyles({
    root: {
        borderRadius: 25
    }
})(ButtonGroup);

const LeftButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 14,
        lineHeight: 2.5,
        width: '33vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        background: '#e6007a',
        borderRadius: 25
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '66vw',
        }
    }
})(Button);

const ArrowButton = withStyles({
    root: {
        background: '#e6007a',
        borderRadius: 25
    }
})(Button);

const CustomMenuList = withStyles({
    root: {
        width: '33vw',
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '66vw',
        }
    }
})(MenuList);
