import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './NotFound';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import PhotoGallery from './pages/PhotoGallery';
import UpcomingEvents from './pages/UpcomingEvents';
import MeetingAgenda from './pages/MeetingAgenda';
import Projects from './pages/Projects';
import Roles from './pages/Roles';
import NewMembers from './pages/NewMembers';
import Fundraising from './pages/Fundraising';
import Alumni from './pages/Alumni';
import Resources from './pages/Resources';
import TeamStructure from './pages/TeamStructure';
import HelpPage from './pages/HelpPage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/Youth-Leadership-Team-Database">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/meeting-agenda" element={<MeetingAgenda />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/new-members" element={<NewMembers />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team-structure" element={<TeamStructure />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;