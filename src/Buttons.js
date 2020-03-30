import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";

const WelcomeButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 14,
        padding: '6px 12px',
        lineHeight: 2,
        margin: 16,
        width: '25vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        background: '#e6007a'
    }
})(Button);

const GenerateButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 14,
        padding: '6px 12px',
        lineHeight: 2.5,
        margin: 16,
        width: '38vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        background: '#e6007a'
    }
})(Button);

const ReGenerateButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 12,
        padding: '6px 12px',
        lineHeight: 2,
        marginTop: 30,
        width: '25vw',
        fontFamily: [
            'Roboto'
        ].join(','),
        background: '#e6007a'
    }
})(Button);

const BackButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 12,
        padding: '6px 12px',
        lineHeight: 2,
        marginTop: 16,
        width: '25vw',
        fontFamily: [
            'Roboto'
        ].join(','),
    }
})(Button);

export {WelcomeButton, GenerateButton, ReGenerateButton, BackButton};
