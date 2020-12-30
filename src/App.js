
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className = 'app'>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route exact path = '/shop' component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
