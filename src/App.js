import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PriscillasPage from './pages/PriscillasPage';
import ScoopsPage from './pages/ScoopsPage'

function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

  const onSetDarkMode = (bool) => {
    localStorage.setItem("darkMode", !bool)
    setDarkMode(!bool)
  }

  useEffect(() => {
    if(!localStorage.getItem("darkMode")){
      localStorage.setItem("darkMode", false)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Routes>
          <Route path="/" element={<PriscillasPage darkMode={darkMode} onSetDarkMode={onSetDarkMode} />} />
          <Route path="/ice-cream" element={<ScoopsPage darkMode={darkMode} onSetDarkMode={onSetDarkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
