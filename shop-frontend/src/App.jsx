import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Add from './pages/Add';
import Detail from './components/Detail';
import Basket from './components/Basket';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<Add />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
