import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import SalesDashboard from './pages/SalesDashboard.jsx';
import ProjectDashboard from './pages/ProjectDashboard.jsx';
import FinalDesktop from './pages/FinalDesktop.jsx';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<SalesDashboard />} />
          <Route path="/projects" element={<ProjectDashboard />} />
          <Route path="/final" element={<FinalDesktop />} />
        </Routes>
      </Router>
    )
}

export default App
