import './App.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
      className={
        darkMode
          ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
          : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  );
}

export default App;
