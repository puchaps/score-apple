import React from 'react';

import './home-page.styles.scss';

import { HOME_DATA } from '../../data/home-page-data/home.data';
import {handleSliderTimeOut} from './utils/utilit-slaider';

import Directory from '../../components/home-component/directory/directory.component';
import Menu from '../../components/home-component/menu/menu.component';


class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      catalog: HOME_DATA
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