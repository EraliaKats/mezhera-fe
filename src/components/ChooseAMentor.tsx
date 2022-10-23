import axios from "axios";
import { env } from "process";
import { useEffect, useState } from "react";
import { MentorProfile } from "../utils/interfaces";

export default function ChooseAMentor(): JSX.Element {
  const [mentorProfile, setMentorProfile] = useState<MentorProfile[]>([])
  useEffect(() => {
    async function fetchMentorProfile() {
      const response = await axios.get(`http://localhost:4000/users/1/profile`);
      setMentorProfile(response.data);
    }
    fetchMentorProfile();
  }, []);


  return <h1>{mentorProfile[0]}</h1>;
}
