import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/global/Header.js';
import Home from './components/pages/Home.js';
import JobCheck from './components/pages/JobCheck.js';
import InfoCenter from './components/pages/InfoCenter.js';
import ResumeCheck from './components/pages/ResumeCheck.js';
import SuperPlan from './components/pages/SuperPlan.js';
//jiaming

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-check" element={<JobCheck />} />
        <Route path="/info-center" element={<InfoCenter />} />
        <Route path="/resume-check" element={<ResumeCheck />} />
        <Route path="/super-plan" element={<SuperPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
