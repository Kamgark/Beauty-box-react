import React, { Component } from 'react';
import './style.css';
import Home from './pages/home';
import Offers from './pages/offers';
import Index from './pages/index';
import SignUp from './pages/signup';
import Payment from './pages/payment';
import Error from './pages/error';
import TermsPage from './pages/terms';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import fire from './config/fire';
import {BeautyProvider} from './store/context';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
        loader: true
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user , loader: false});
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null, loader: false });
        // localStorage.removeItem('user');
      }
    });
    
  } 

  render() {
    return (
      <BeautyProvider>
          {

            this.state.loader  ?
            <div className="fuck">
              <div id="breaty" class="loader"></div>
            </div>:
          <BrowserRouter>

          <Switch>
          <div>
          {
          this.state.user?
          (<div><Route path="/" component={Home} exact/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={Payment}/>
          <Route path="/offers" component={Offers}/>
          <Route path="/index" component={Index}/>
                <Route path="/termsandconditions" component={TermsPage}/></div>
          ) :
          (<div><Route path="/" component={Index} exact/>
          <Route path="/gifts" component={SignUp}/>
          <Route path="/index" component={Index}/>
          <Route path="/home" component={Error}/>
          <Route path="/about" component={Error}/>
          <Route path="/offers" component={Error}/>
                <Route path="/termsandconditions" component={TermsPage}/></div>
          )
          }
          </div>
          </Switch>
          </BrowserRouter>
          }
      </BeautyProvider>
    );
  }
}
export default App;
