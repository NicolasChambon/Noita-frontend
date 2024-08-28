import { Route, Routes } from 'react-router-dom';

import Header from '../organisms/Header/Header';
import Home from '../pages/Home/Home';
import Footer from '../organisms/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
