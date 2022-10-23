import {useState} from 'react'
import axios from "axios";
import { env } from "process";
import { useEffect } from "react";
import MentorCard from "./MentorCard";
import { makeStyles } from "@material-ui/core";
import { MentorProfile } from "../utils/interfaces";

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
  const [mentorProfile, setMentorProfile] = useState<MentorProfile[]>([])

  useEffect(() => {
    async function fetchMentorProfile() {
      const response = await axios.get(`http://localhost:4000/users/1/profile`);
      setMentorProfile(response.data);
    }
    fetchMentorProfile();
  }, []);


  return (
    <div>
      <h1 className={classes.title}>{'Mentors based on your preferences'}</h1>
      <div className={classes.mentorCardContainer}>
        <MentorCard/>
        <MentorCard/>
        <MentorCard/>
      </div>
    </div>
  )}
