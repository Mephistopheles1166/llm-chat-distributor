import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { useAppStore } from '@/stores/appStore';

function App() {
  const { theme } = useAppStore();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<div className="min-h-screen bg-jetbrains-bg flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-jetbrains-text mb-4">404</h1>
              <p className="text-gray-400">页面未找到</p>
            </div>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;