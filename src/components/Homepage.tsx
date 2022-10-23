import { useAppContext } from "../App";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../utils/useStyles";

export default function Homepage(): JSX.Element {
    const classes = useStyles();
    return (
    <>
    <div className={classes.nextButtonContainer}>
        <Button 
        className={classes.nextButton}
        >
        <Link 
            to='/Questionnaire'
            className={classes.nextLink}
        >
            {'Next'}
        </Link>
        </Button>
      </div>
    </>
    );
  }

  
  