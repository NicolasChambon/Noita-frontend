import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import BoHome from '../pages/BoHome/BoHome';
import BoConcerts from '../pages/BoConcerts/BoConcerts';
import BoConcertsAdd from '../pages/BoConcertsAdd/BoConcertsAdd';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/admin" element={<BoHome />} />
        <Route path="/admin/concerts" element={<BoConcerts />} />
        <Route path="/admin/concerts/add" element={<BoConcertsAdd />} />
      </Routes>
    </div>
  );
}

export default App;
