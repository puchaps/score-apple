import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { AUTH, createUserAuthInFireStore } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/reducers/userAuth-reducer/actions/userAuth.actions';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import AuthorizationPage from './pages/authorization-page/authorization-page.component';
import Header from './components/header-component/header/header.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

class App extends React.Component{
  unSubscribeAuth = null;

  componentDidMount = () => {
    const{setCurrentUser} = this.props;

    this.unSubscribeAuth = AUTH.onAuthStateChanged( async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAuthInFireStore(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
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
          <Route  path = '/shop' component = {ShopPage}/>
          <Route  path = '/login' component = {AuthorizationPage}/>
          <Route  path = '/checkout' component = {CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
