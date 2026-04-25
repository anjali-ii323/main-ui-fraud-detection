import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import DetectionPage from './pages/DetectionPage';
import LandingPage from './pages/LandingPage';
import TrainingPage from './pages/TrainingPage';
import Shell from './components/Shell';

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detect" element={<DetectionPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Shell>
  );
}
