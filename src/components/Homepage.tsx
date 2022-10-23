import { useAppContext } from "../App";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../utils/useStyles";

export default function Homepage(): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <main>
        <h1  className= {classes.title}>Mezhera</h1>
        <p >
          Sharing is caring and our volunteer mentors <em>actually</em> care to
          share!
        </p>
        <p>Connect with a financial mentor today! </p>
        <Button className={classes.questionnaireButton}>
          {" "}
          Let's find yours!{" "}
        </Button>
      </main>
      <div className={classes.nextButtonContainer}>
        <Button className={classes.nextButton}>
          <Link to="/Questionnaire" className={classes.nextLink}>
            {"Next"}
          </Link>
        </Button>
      </div>
    </>
  );
}
