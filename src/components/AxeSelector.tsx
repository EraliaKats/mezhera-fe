import { makeStyles, Button } from "@material-ui/core";
import { useAppContext } from "../App";
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => {
    return ({
        formControl: {
            margin: theme.spacing(2),
            minWidth: 120,
        },
        body: {
            width: '80vw',
            height: '90vh',
            margin: 'auto',
        },
        title: {
            fontFamily: 'DM sans',
            color: '#004346',
            textAlign: 'center',
            paddingTop: '15px',
            marginBottom: '35px'
        },
        select: {
            '&:after': {
                borderColor: '#00B8B8',
            }
        },
        nextButton: {
            color: 'white',
            backgroundColor: '#00B8B8',
            "&:hover, &:focus": {
              backgroundColor: "#004346"
            },
            float: 'right',
            marginTop: '150px'
          },
        nextLink: {
            color: 'white',
            textDecoration: 'none'
        },
        selectContainer: {
            textAlign: 'center',
            marginTop: '50px'
        }
    })
});

export default function AxeSelector(): JSX.Element {
    const classes = useStyles();
    const { state, actions, dispatch } = useAppContext();

    const handleSelectorChange = (event: any) => {
        dispatch(actions.axePreference.create.update(event.target.value));
    };

    return (
        <div className={classes.body}>
            <div id="google_translate_element"></div>
            <h1 className={classes.title}>{'Accessibility preferences ?'}</h1>
            <h2 className={classes.title}>{'Please tell us which way you are most comfortable communicating with your mentor'}</h2>
            <div className={classes.selectContainer}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Options</InputLabel>
                    <Select
                        value={state.axePreference}
                        onChange={handleSelectorChange}
                        className={classes.select}
                    >
                        <MenuItem value={'Chat'}>{'Chat'}</MenuItem>
                        <MenuItem value={'Video call'}>{'Video call'}</MenuItem>
                        <MenuItem value={'No preference'}>{'No preference'}</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {state.axePreference !== '' &&
            <Button 
                className={classes.nextButton}
              >
                <Link 
                  to='/choose-a-mentor'
                  className={classes.nextLink}
                >
                  {'Next'}
                </Link>
              </Button>
            }
        </div>
    );
}