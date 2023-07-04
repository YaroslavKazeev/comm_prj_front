import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import editPage from './components/editPage';
import fullPage from './components/fullPage';
import logInPage from './components/logInPage';
import questionPage from './components/questionPage';
import signupPage from './components/signupPage';
import startPage from './components/startPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/edit_page/:id" element={<editPage />} />
        <Route path="/fullPage/:id" element={<fullPage />} />
        <Route path="/login" element={<logInPage />} />
        <Route path="/questionPage" element={<questionPage />} />
        <Route path="/signup" element={<signupPage />} />
        <Route path="/" element={<startPage />} />
      </Routes>
    </div>
  );
}

export default App;
