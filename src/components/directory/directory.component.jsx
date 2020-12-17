import React from 'react';

import './directory.styles.scss';

import CatalogItem from '../catalog-item/catalog-item.component';

class Directory extends React.Component{
  constructor() {
    super();
    this.state = {
      catalog: [
        {
          title: 'iPad', 
          imageUrl: 'https://cdn.cultofmac.com/wp-content/uploads/2018/11/IMG_2686.7525fee9121c4b8b889e62b41941046a-780x476.jpeg',
          id: 1
        },
        {
          title: 'Apple Watch', 
          imageUrl: 'https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2F85LzA9MAWI.Qm3ORNAstxA--%7EB%2FaD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u%2Fhttps%3A%2F%2Fimg.vidible.tv%2Fprod%2F2019-10%2F29%2F5db89177e571114544f655c3%2F5db892621b0bb6237a09aba4_o_U_v1.jpg&client=amp-blogside-v2&signature=872df1be4d0d15ea1588354552c0391ade655208',
          id: 2 
        },
        {
          title: 'AirPods', 
          imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F05%2Fapple-move-airpod-production-vietnam-info-1.jpg?q=75&w=800&cbr=1&fit=max',
          id: 3
        },
        {
          title: 'iPhone', 
          imageUrl: 'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/960x0-2-960x540.jpg',
          id: 4,
          size: 'large'
        },
        {
          title: 'MacBock', 
          imageUrl: 'https://9to5toys.com/wp-content/uploads/sites/5/2020/11/macbook-air-202o-m1.jpg?w=1200&h=600&crop=1',
          id: 5,
          size: 'large'
        },
      ]
    }
  };

  render() {
    const{catalog} = this.state;

    const showCatalogMap = catalog.map(item => <CatalogItem key = {item.id} {...item}/>);

    return(
      <div className="directory">
        {showCatalogMap}
      </div>
    )
  }
}

export default Directory;