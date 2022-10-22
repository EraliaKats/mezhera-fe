import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import ChooseAMentor from "./components/ChooseAMentor";
import JobBoard from "./components/JobBoard";
import Questionnaire from "./components/Questionnaire";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/choose-a-mentor" element={<ChooseAMentor />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/job-board" element={<JobBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
