/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react"
import Slider from "react-slick"
import { connect } from "react-redux"

import "./directory-slider.styles.scss"

import { selectorCollections } from "../../../redux/reducers/shop-reducer/selectors/shop.selectors"
import SliderItem from "../slider-item/slider-item.component"

const DirectorySlider = ({ onCollections }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="directory-slider">
      <Slider {...settings}>
        {onCollections.map((item) => (
          <SliderItem key={item.id} imageUrl={item.imageUrl} />
        ))}
      </Slider>
    </div>
  )
}

const mapStateToProps = (state) => ({
  onCollections: selectorCollections(state),
})

export default connect(mapStateToProps)(DirectorySlider)
