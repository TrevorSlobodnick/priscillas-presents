import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {

  const [darkMode, setDarkMode] = useState()

  return (
    <BrowserRouter>
      <div className={darkMode ? "container dark-mode" : "container light-mode"}>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
