
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/pages/home-page/home-page.component';
import ShopPage from './components/pages/shop-page/shop-page.component';

function App() {
  return (
    <div>
      <Route exact path = '/' component = {HomePage}/>
      <Route exact path = '/shop' component = {ShopPage}/>
    </div>
  );
}

export default App;
