import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Aerodinamics from './Aerodinamics';
import ForcesG from './ForcesG';
import Alero from './Alero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerodinamica" element={<Aerodinamics />} />
        <Route path="/forces-g" element={<ForcesG />} />
        <Route path="/alero" element={<Alero />} />

      </Routes>
    </Router>
  );
}

export default App;
