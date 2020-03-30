import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";

const WelcomeButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        lineHeight: 2,
        margin: 16,
        width: 200,
        fontFamily: [
            'Roboto'
        ].join(',')
    }
})(Button);

const SelectButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        lineHeight: 2.5,
        margin: 16,
        width: 300,
        fontFamily: [
            'Roboto'
        ].join(',')
    }
})(Button);

export {WelcomeButton, SelectButton};
