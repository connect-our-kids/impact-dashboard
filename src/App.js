///set personal dashboard as a private route if the user is logged in, then access is granted
import React, { useEffect } from 'react';
import './App.css';
import './index.scss';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PublicDashboard from './views/public_dashboard/PublicDashboard';
import PersonalDashboard from './views/personal_dashboard/PersonalDashboard';
import TestPersonal from './views/personal_dashboard/TestPersonalDashboard';
import TestTeamDash from './views/team_dashboard/TestTeamDash';
import TeamDashboard from './views/team_dashboard/TeamDashboard';
import PrivateRoute from './components/PrivateRoute'

import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(() => {

  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Profile/>
<<<<<<< HEAD
      <Route exact path='/' component={PublicDashboard}/>
      <PrivateRoute path='/team' component={TestTeamDash} />
      <PrivateRoute path='/personal' component={TestPersonal}/>
=======
      <Switch>
        <Route exact path='/' component={PublicDashboard}/>
        <PrivateRoute path='/team' component={TeamDashboard} />
        <PrivateRoute path='/personal' component={PersonalDashboard}/>
      </Switch>
>>>>>>> b0bad3775a21cd73560fa2644c56516a2f2c4a75
    </div>
  );
}

export default App;
