import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Manufacturer from './pages/Manufacturer';
import Transporter from './pages/Transporter';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/manufacturer" component={Manufacturer} />
        <Route path="/transporter" component={Transporter} />
        {/* Add any other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
