import React from 'react';

import './home-page.styles.scss';

import {handleSliderTimeOut} from './utils/utilit-slaider';

import Directory from '../../components/home-component/directory/directory.component';
import Menu from '../../components/home-component/menu/menu.component';

class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  };

  componentDidMount () {
    handleSliderTimeOut(this.myRef.current);
  }

  render() {
    return(
      <div className="home-page">
        <Menu/>
        <Directory myRef = {this.myRef}/>
      </div>
    );
  };
};

export default HomePage;