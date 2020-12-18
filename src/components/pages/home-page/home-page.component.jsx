import React from 'react';

import './home-page.styles.scss';

import Directory from '../../directory/directory.component';
import {handleSliderTimeOut} from './utilit-slaider';
import Menu from '../../menu/menu.component';

class HomePage extends React.Component{
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      catalog: [
        {
          title: 'iPad', 
          imageUrl: 'https://www.macobserver.com/wp-content/uploads/2020/04/iPad-Pro-Floats.png',
          id: 1
        },
        {
          title: 'Apple Watch', 
          imageUrl: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020.jpg.landing-big_2x.jpg',
          id: 2 
        },
        {
          title: 'AirPods', 
          imageUrl: 'https://www.incimages.com/uploaded_files/image/1920x1080/IMG_0954_405861.jpg',
          id: 3
        },
        {
          title: 'iPhone', 
          imageUrl: 'https://cdn.mos.cms.futurecdn.net/3oqmv4bAtKt3uJFdPzwxch.jpeg',
          id: 4,
          size: 'large'
        },
        {
          title: 'MacBock', 
          imageUrl: 'https://spy.com/wp-content/uploads/2020/11/m1-macbook-pro-air.png',
          id: 5,
          size: 'large'
        },
      ]
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