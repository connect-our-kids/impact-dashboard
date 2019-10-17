import React from 'react';
import './App.css';
import './index.scss';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PublicDashboard from './components/PublicDashboard';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Profile/>
      <PublicDashboard />
    </div>
  );
}

export default App;
