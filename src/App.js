import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { checkUserSesionStartAC } from './redux/reducers/userAuth-reducer/actions/userAuth.actions';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import AuthorizationPage from './pages/authorization-page/authorization-page.component';
import Header from './components/header-component/header/header.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

class App extends React.Component{
  componentDidMount = () => {
    const{checkUserSesionStart} = this.props;
    
    checkUserSesionStart();
  };

  render() {
    return (
      <div className = 'app'>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route  path = '/shop' component = {ShopPage}/>
          <Route exact path = '/login' component = {AuthorizationPage}/>
          <Route exact path = '/checkout' component = {CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSesionStart: () => dispatch(checkUserSesionStartAC())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
