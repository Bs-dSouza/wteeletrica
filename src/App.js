import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './animations.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Home from './pages/Home/Home';

function App() {
  useScrollReveal();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
