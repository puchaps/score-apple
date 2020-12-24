
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/pages/home-page/home-page.component';

function App() {
  return (
    <div>
      <Route exact path = '/' component = {HomePage}/>
    </div>
  );
}

export default App;
