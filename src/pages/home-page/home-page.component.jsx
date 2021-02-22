import React from "react"

import "./home-page.styles.scss"

import DirectorySlider from "../../components/home-component/directory-slider/directory-slider.component"
import Menu from "../../components/home-component/menu/menu.component"

const HomePage = () => (
  <div className="home-page">
    <Menu />
    <DirectorySlider />
  </div>
)

export default HomePage
