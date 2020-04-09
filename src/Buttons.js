import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";

const WelcomeButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 14,
        lineHeight: 2.5,
        margin: 16,
        width: '30vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        background: '#e6007a',
        borderRadius: 25
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '50vw',
        },
    },
})(Button);

const ReGenerateButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 14,
        lineHeight: 2,
        marginTop: 30,
        width: '30vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        // background: '#e6007a',
        borderRadius: 25
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '50vw',
        },
    }
})(Button);

const BackButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 14,
        lineHeight: 2,
        marginTop: 16,
        width: '30vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        borderRadius: 25
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '50vw',
        },
    },
})(Button);

export {WelcomeButton, ReGenerateButton, BackButton};
