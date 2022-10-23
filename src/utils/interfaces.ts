export interface UserInterface {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_mentor: boolean;
}

export interface MentorProfile {
  id: string;
  mentor_id: string;
  profile_desc: string;
  first_name: string;
  last_name: string;
  email: string;
  is_mentor: boolean;
  skill_id: string;
  skills: Array<unknown> //change unknown type
}
