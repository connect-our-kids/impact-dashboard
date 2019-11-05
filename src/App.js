///set personal dashboard as a private route if the user is logged in, then access is granted
import React, { useEffect } from 'react';
import './App.css';
import './index.scss';

import NavBar from './components/NavBar';
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
      <Switch>
        <Route exact path='/' component={PublicDashboard}/>
        <Route exact path='/dev-sean' component={PublicDashboard}/>
        <PrivateRoute path='/team' component={TeamDashboard} />
        <PrivateRoute path='/personal' component={PersonalDashboard}/>
      </Switch>
    </div>
  );
}

export default App;
