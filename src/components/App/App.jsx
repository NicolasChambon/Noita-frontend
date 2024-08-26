import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Header from '../organisms/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
