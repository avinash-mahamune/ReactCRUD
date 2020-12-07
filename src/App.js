
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound'

import Navbar from './components/core/Navbar';
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';

function App() {
  return (
    <Router>

      <div className="App">
        <h1 className="text-center">Hello Worls</h1>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/users/add' component={AddUser} />
            <Route exact path='/users/edit/:id' component={EditUser} />
            <Route exact path='/users/viewuser/:id' component={ViewUser} />
            <Route component={NotFound} /> 
          </Switch>
      </div>

    </Router>

  );
}

export default App;
