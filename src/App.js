import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import JobCheck from './pages/JobCheck.js';
import IndustryAnalysis from './pages/IndustryAnalysis.js';
import ResumeCheck from './pages/ResumeCheck.js';
import SuperPlan from './pages/SuperPlan.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-check" element={<JobCheck />} />
        <Route path="/industry-analysis" element={<IndustryAnalysis />} />
        <Route path="/resume-check" element={<ResumeCheck />} />
        <Route path="/super-plan" element={<SuperPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
