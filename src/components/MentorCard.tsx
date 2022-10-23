import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return ({
    root: {
      width: '400px',
      height: '650px',
      fontFamily: 'DM sans',
      color: '#004346',
    },
    image: {
      height: '250px',
      borderRadius: '4px',
      width: '200px',
      margin: 'auto',
      display: 'block'
    },
    mentorName: {
      marginTop: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    keyFacts: {
      textAlign: 'center',
      marginTop: '5px',
      fontStyle: 'italic',
    },
    mentorDescription: {
      textAlign: 'justify',
    },
    mentorDescriptionContainer: {
      marginTop: '15px',
      borderRadius: '4px',
      padding: '10px'
    },
    buttonFill: {
      backgroundColor: '#00B8B8',
      color: 'white',
      "&:hover, &:focus": {
        backgroundColor: "#004346"
      }
    }
  })
})

export default function MentorCard (): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src="https://picsum.photos/200/300" className={classes.image} alt={'Mentor profile'}/>
        <Typography className={classes.mentorName}>{'Mentor name'}</Typography>
        <Typography className={classes.keyFacts}>{'Accessibility preference: Lorem ipsum'}</Typography>
        <Typography className={classes.keyFacts}>{'Key skills: Lorem ipsum, Lorem ipsum, Lorem ipsum'}</Typography>
        <div className={classes.mentorDescriptionContainer}>
          <Typography className={classes.mentorDescription}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          className={classes.buttonFill}
        >
          {'Message mentor'}
        </Button>
      </CardActions>
    </Card>
  );
}
