import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './pages/Navbar';

import ViewStudent from './pages/ViewStudent';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Login from './pages/Login';

// import EditStudent from './pages/Logout';

import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000/";

function App() {
  return (
    <div className="App">
        <Router>

          <Navbar />

          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/students" component={ViewStudent} />
            <Route path="/add-students" component={AddStudent} />
            <Route path="/edit-student/:id" component={EditStudent} />
            {/* <Route path="/logout" component={Logout} /> */}

          </Switch>
        </Router>
    </div>
  );
}

export default App;