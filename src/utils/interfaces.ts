import { ActionsProxy, useRiducer, Action , RiducerDict} from "riduce";

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

export interface Context {
  state: {
    userSubjectChoices: string[];
    subjectCount: number;
    axePreference: string;
};
dispatch: React.Dispatch<Action<unknown>>;
actions: ActionsProxy<{
    userSubjectChoices: string[];
    subjectCount: number;
    axePreference: string;
}, {
    userSubjectChoices: string[];
    subjectCount: number;
    axePreference: string;
  }, RiducerDict<any>>
}