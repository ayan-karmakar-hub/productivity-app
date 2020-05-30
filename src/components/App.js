import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Navbar from './Navbar';
import Overview from './Overview';
import TodayView from './TodayView';
import Calendar from './Calendar';
import Pomodoro from './Pomodoro';
import CreateTask from './CreateTask';

const App = () => {
  return (
    <div className='container'>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Overview} />
          <Route path='/today-view' exact component={TodayView} />
          <Route path='/calendar' exact component={Calendar} />
          <Route path='/pomodoro' exact component={Pomodoro} />
          <Route path='/create-task' exact component={CreateTask} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
