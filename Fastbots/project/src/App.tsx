import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Bots } from './pages/Bots';
import { BotBuilder } from './pages/BotBuilder';
import { Analytics } from './pages/Analytics';
import { Conversations } from './pages/Conversations';
import { Team } from './pages/Team';
import { Integrations } from './pages/Integrations';
import { Settings } from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            <Route path="/bots/builder" element={<BotBuilder />} />
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/bots" element={<Bots />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/conversations" element={<Conversations />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;