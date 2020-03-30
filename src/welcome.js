import React from "react";
import logo from "./logo.png";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Header from "./Header";

function Welcome() {
    const {t} = useTranslation();
    const history = useHistory();
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleClick = () => {
        history.push("/select")
    };

    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <Typography>
                        {t('tip1')}
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label={t('yes')}
                    />
                </div>
                <div>
                    <Typography>
                        {t('tip2')}
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label={t('yes')}
                    />
                </div>
                <Button variant="contained"
                               color="secondary"
                               disabled={!(state.checkedA && state.checkedB)}
                               onClick={handleClick}
                >
                    {t('begin')}
                </Button>
            </div>
        </div>
    )
}

export default React.memo(Welcome);
