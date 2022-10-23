// import axios from "axios";
// import { env } from "process";
// import { useEffect } from "react";
import MentorCard from "./MentorCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return ({
    mentorCardContainer: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    title: {
      fontFamily: 'DM sans',
      color: '#004346',
      textAlign: 'center',
      marginBottom: '40px'
    }
  })
})

export default function ChooseAMentor(): JSX.Element {
  const classes = useStyles();

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const response = await axios.get(`${env.API_URL}/users`);
  //     setUsers(response.data);
  //   }
  //   fetchUsers();
  // }, []);

  return (
    <div>
      <h1 className={classes.title}>{'Mentors based on your preferences'}</h1>
      <div className={classes.mentorCardContainer}>
        <MentorCard/>
        <MentorCard/>
        <MentorCard/>
      </div>
    </div>
  );
}
