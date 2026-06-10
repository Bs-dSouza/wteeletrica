import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './animations.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Home from './pages/Home/Home';

function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
