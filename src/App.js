import React, { Component } from 'react';
import './style.css';
import Home from './pages/home';
import Offers from './pages/offers';
import Index from './pages/index';
import SignUp from './pages/signup';
import Payment from './pages/payment';
import Error from './pages/error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import fire from './config/fire';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
          {
            this.state.user? 
            (<div><Route path="/" component={Home} exact/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={Payment}/>
              <Route path="/offers" component={Offers}/>
              <Route path="/index" component={Index}/></div>
            )
            :
            (<div><Route path="/" component={Index} exact/>
              <Route path="/gifts" component={SignUp}/>
              <Route path="/index" component={Index}/>
              <Route path="/home" component={Error}/>
              <Route path="/about" component={Error}/>
              <Route path="/offers" component={Error}/></div>
            )
          }
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
