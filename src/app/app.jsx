import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './pages/Home'; // Sample page

function App() {
  const title = 'dashboard';

  return (
    <Router>
      <div className="app">
        <SideNav /> {/* Equivalent to <app-sidenav> */}
        <div className="main-content">
          <Routes> {/* Equivalent to <router-outlet> */}
            <Route path="/" element={<Home title={title} />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
