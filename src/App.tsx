import { createContext } from "react";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActionsProxy, useRiducer } from "riduce";
import Chat from "./components/Chat";
import ChooseAMentor from "./components/ChooseAMentor";
import Questionnaire from "./components/Questionnaire";
import AxeSelector from "./components/AxeSelector";
import Homepage from "./components/Homepage";
import { Context } from "./utils/interfaces";

const menteeData = {
  userSubjectChoices: [] as string[],
  subjectCount: 0, 
  axePreference: ''
}

export const AppContext = createContext(
  {} as {
    state: typeof menteeData;
    dispatch: ReturnType<typeof useRiducer>["dispatch"];
    actions: ActionsProxy<typeof menteeData>;
  }
);

export function useAppContext(): Context {
  return useContext(AppContext);
}

function App(): JSX.Element {
  const { state, dispatch, actions } = useRiducer(menteeData);

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/choose-a-mentor" element={<ChooseAMentor />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/select-accessibility" element={<AxeSelector />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
