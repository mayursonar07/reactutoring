import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from '../public/logo.png';
import NavigationBar from './components/NavigationBar';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>

          <div className="container">
            <NavigationBar />
            <ContentArea />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App