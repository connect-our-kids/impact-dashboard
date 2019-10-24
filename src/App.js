///set personal dashboard as a private route if the user is logged in, then access is granted
import React, { useEffect } from 'react';
import './App.css';
import './index.scss';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PublicDashboard from './views/public_dashboard/PublicDashboard';
import PersonalDashboard from './views/personal_dashboard/PersonalDashboard';
import TeamDashboard from './views/team_dashboard/TeamDashboard';
import PrivateRoute from './components/PrivateRoute'

import { Route } from 'react-router-dom';

function App() {
  useEffect(() => {

  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Profile/>
      <Route exact path='/' component={PublicDashboard}/>
      <PrivateRoute path='/team' component={TeamDashboard} />
      <PrivateRoute path='/personal' component={PersonalDashboard}/>
    </div>
  );
}

export default App;
