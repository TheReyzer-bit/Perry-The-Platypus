import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/teacher" component={TeacherPage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;
