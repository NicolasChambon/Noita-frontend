import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import BoHome from '../pages/BoHome/BoHome';
import BoConcerts from '../pages/BoConcerts/BoConcerts';
import BoConcertsForm from '../pages/BoConcertsForm/BoConcertsForm';
import BoNews from '../pages/BoNews/BoNews';
import BoNewsForm from '../pages/BoNewsForm/BoNewsForm';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/admin" element={<BoHome />} />
        <Route path="/admin/concerts" element={<BoConcerts />} />
        <Route
          path="/admin/concerts/add"
          element={<BoConcertsForm type="add" title="Add concert" />}
        />
        <Route
          path="/admin/concerts/edit/:id"
          element={<BoConcertsForm type="edit" title="Edit concert" />}
        />
        <Route path="/admin/news" element={<BoNews />} />
        <Route
          path="/admin/news/add"
          element={<BoNewsForm type="add" title="Add news" />}
        />
        <Route
          path="/admin/news/edit/:id"
          element={<BoNewsForm type="edit" title="Edit news" />}
        />
      </Routes>
    </div>
  );
}

export default App;
