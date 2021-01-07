import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';

import AuthorizationPage from './pages/authorization-page/authorization-page.component';
import Header from './components/header-component/header/header.component';
import { AUTH } from './firebase/firebase.utils';

class App extends React.Component{
  state = {
    currentUser: null
  };

  unSubscribeAuth = null;

  componentDidMount = () => {
    this.unSubscribeAuth = AUTH.onAuthStateChanged( user => {
      this.setState({
        currentUser: user
      });
    });
  };

  componentWillUnmount = () => {
    this.unSubscribeAuth();
  };
  
  render() {
    return (
      <div className = 'app'>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/shop' component = {ShopPage}/>
          <Route exact path = '/login' component = {AuthorizationPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
