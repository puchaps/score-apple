import React from 'react';

import './home-page.styles.scss';

import { DATA_HOME_PAGE } from './home-page.data';

import Directory from '../../directory/directory.component';
import {handleSliderTimeOut} from './utilit-slaider';
import Menu from '../../menu/menu.component';


class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      catalog: DATA_HOME_PAGE
    }
  };

  componentDidMount () {
    handleSliderTimeOut(this.myRef.current);
  }

  render() {
    const{catalog} = this.state;

    return(
      <div className="home-page">
        <Menu catalog = {catalog}/>
        <Directory catalog = {catalog} myRef = {this.myRef}/>
      </div>
    )
  }
  
}

export default HomePage;