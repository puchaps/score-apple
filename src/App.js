import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { AUTH, createUserAuthInFireStore } from './firebase/firebase.utils';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import AuthorizationPage from './pages/authorization-page/authorization-page.component';
import Header from './components/header-component/header/header.component';

class App extends React.Component{
  state = {
    currentUser: null
  };

  unSubscribeAuth = null;

  componentDidMount = () => {
    this.unSubscribeAuth = AUTH.onAuthStateChanged( async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAuthInFireStore(userAuth);

        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: userAuth.uid,
                ...snapShot.data()
              }
            });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.unSubscribeAuth();
  };
  
  render() {
    const{currentUser} = this.state;

    console.log(currentUser)
    return (
      <div className = 'app'>
        <Header currentUser = {currentUser}/>
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
