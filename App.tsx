import React from 'react';
import { Router } from './lib/router';
import { useAuth } from './lib/auth';
import { AdminLogin } from './components/admin/AdminLogin';

// Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { PortalPage } from './pages/PortalPage';
import { IntranetPage } from './pages/IntranetPage';
import { NotFoundPage } from './pages/NotFoundPage';

const routes = [
  { path: '/', component: HomePage },
  { path: '/work', component: WorkPage },
  { path: '/work/:slug', component: WorkDetailPage },
  { path: '/journal', component: JournalPage },
  { path: '/journal/:slug', component: JournalDetailPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/admin', component: AdminPage, auth: 'admin' },
  { path: '/portal', component: PortalPage, auth: 'client' },
  { path: '/intranet', component: IntranetPage, auth: 'team' },
  { path: '*', component: NotFoundPage },
];

function App() {
  const { state } = useAuth();

  return (
    <Router
      routes={routes}
      authRole={state.isAuthenticated ? state.role : null}
      fallback={NotFoundPage}
      loginComponent={AdminLogin}
    />
  );
}

export default App;
