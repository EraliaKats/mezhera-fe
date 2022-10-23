import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Community from "../Images/community.svg"

const useStyles = makeStyles((theme) => {
  return ({
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0px 40px'
    },
    title: {
      fontFamily: "DM sans",
      color: "#004346",
      fontSize: "150px"
    },
    about: {
      fontFamily: "DM sans",
      color: "#004346",
      paddingTop: "10px",
      fontSize: "30px",
      marginLeft: '40px'
    },
    button: {
      color: "white",
      backgroundColor: "#00B8B8",
      "&:hover, &:focus": {
        backgroundColor: "#004346",
      },
      textAlign: 'center',
      marginLeft: '40px',
      height: '50px',
      width: '300px',
      marginTop: '35px'
    },
    link: {
      color: "white",
      textDecoration: "none",
    },
    image: {
      height: '300px',
      marginTop: '70px'
    },
    subText: {
      fontFamily: "DM sans",
      color: "#004346",
      fontSize: "20px",
      marginLeft: '40px',
      fontStyle: 'italic'
    }
  });
});

export default function Homepage(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div id="google_translate_element"></div>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>{'Mezhera'}</h1>
        <img src={Community} className={classes.image} alt={'community icon'}/>
      </div>
        <h3 className={classes.about}>Sharing is caring and our volunteer mentors <em>actually</em> care to share!</h3>
        <h5 className={classes.subText}>{'Sign up and gain access to financial mentorship from leading professionals.'}</h5>
        <Button className={classes.button}>
          <Link to="/Questionnaire" className={classes.link}>
            {'Let\'s find yours!'}
          </Link>
        </Button>
    </>
  );
}