import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/Page';
import AboutPage from '@/pages/about/Page';
import ProjectsPage from '@/pages/projects/Page';
import AcademicsPage from '@/pages/academics/Page';
import ResumePage from '@/pages/resume/Page';

import ContactPage from '@/pages/contact/Page';
import SettingsPage from '@/pages/settings/Page';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/resume" element={<ResumePage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
