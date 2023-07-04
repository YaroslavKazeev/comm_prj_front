import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPage from './Components/EditPage';
import FullPage from './Components/FullPage';
import LogInPage from './Components/LogInPage';
import QuestionPage from './Components/QuestionPage';
import SignUpPage from './Components/SignUpPage';
import StartPage from "./Components/StartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/edit_page/:id" element={<EditPage />} />
          <Route path="/fullPage/:id" element={<FullPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/questionPage" element={<QuestionPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


