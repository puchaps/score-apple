import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { FIRE_STORE, getCollectionsFromFiresoter } from './firebase/firebase.utils';
import { checkUserSesionStartAC } from './redux/reducers/userAuth-reducer/actions/userAuth.actions';
import { getCollectionStartAC } from './redux/reducers/shop-reducer/actions/shop.actions';
import { selectorCollections } from './redux/reducers/shop-reducer/selectors/shop.selectors';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import AuthorizationPage from './pages/authorization-page/authorization-page.component';
import Header from './components/header-component/header/header.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import SpinnerWrapper from './components/custom-component/spinner-wrapper/spinner-wrapper.component';
import Footer from './components/footer-components/footer.component';


class App extends React.Component{
  componentDidMount = () => {
    const{checkUserSesionStart, getCollectionStart} = this.props;
    
    getCollectionStart();
    checkUserSesionStart();
  };

  render() {
    const{collections} = this.props;
    
    if (!collections) {
      return <SpinnerWrapper/>
    }
    return (
      <div className = 'app'>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route  path = '/shop' component = {ShopPage}/>
          <Route exact path = '/login' component = {AuthorizationPage}/>
          <Route exact path = '/checkout' component = {CheckoutPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSesionStart: () => dispatch(checkUserSesionStartAC()),
  getCollectionStart: (collections) => dispatch(getCollectionStartAC(collections))
})

const mapStateToProps = state => ({
  collections: selectorCollections(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
