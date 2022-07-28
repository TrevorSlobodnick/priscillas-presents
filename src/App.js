import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PriscillasPage from './pages/PriscillasPage';
import ScoopsPage from './pages/ScoopsPage'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Routes>
          <Route path="/" element={<PriscillasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/ice-cream" element={<ScoopsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
