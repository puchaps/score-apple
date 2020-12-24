import React from 'react';

import './home-page.styles.scss';

import { DATA_APPLE } from '../../../data/data';

import Directory from '../../directory/directory.component';
import {handleSliderTimeOut} from './utilit-slaider';
import Menu from '../../menu/menu.component';


class HomePage extends React.Component{
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      catalog: DATA_APPLE
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