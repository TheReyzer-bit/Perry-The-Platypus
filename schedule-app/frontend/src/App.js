import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/teacher" component={TeacherPage} />
          <Route path="/student" component={StudentPage} />
          <Route path="/login" component={LoginPage} />
          {/* Other routes here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
