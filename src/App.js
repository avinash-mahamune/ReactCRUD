
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound'

import Navbar from './components/core/Navbar';
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
import Dashboard from './components/ecommerce/dashboard';
import popup from './components/snippet/popup';

function App() {
  return (
    <Router>

      <div className="App">
        <h1 className="text-center">Welcome To Telecom </h1>
        {/* navigation imported  */}
        <Navbar />


          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/users/add' component={AddUser} />
            <Route exact path='/users/edit/:id' component={EditUser} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/popup' component={popup} />
            <Route exact path='/users/viewuser/:id' component={ViewUser} />
            <Route component={NotFound} /> 
          </Switch>
      </div>

    </Router>

  );
}

export default App;
