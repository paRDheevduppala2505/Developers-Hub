import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Indprofile from './Indprofile';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/login" exact component={Login}/>
             <Route path="/register" exact component={Register}/>
             <Route path="/dashboard" exact component={Dashboard}/>
             <Route path="/myprofile" exact component={Myprofile}/>
             <Route path="/indprofile/:fullname/:email/:skill/:id" exact component={Indprofile}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App
