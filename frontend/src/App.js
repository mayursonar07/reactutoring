import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>

          <div className="main-app-container">
            <div className='main-body-container'>
              <NavBar />
              <ContentArea />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App