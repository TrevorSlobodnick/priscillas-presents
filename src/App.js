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
          <Route path="/" element={<PriscillasPage />} />
          <Route path="/ice-cream" element={<ScoopsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
