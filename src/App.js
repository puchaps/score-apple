/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from "react"
import { connect } from "react-redux"

import { checkUserSessionStartAC } from "./redux/reducers/userAuth-reducer/actions/userAuth.actions"
import { getCollectionStartAC } from "./redux/reducers/shop-reducer/actions/shop.actions"
import { selectorLoader } from "./redux/reducers/shop-reducer/selectors/shop.selectors"

import Header from "./components/header-component/header/header.component"
import SpinnerLoader from "./components/custom-component/spinner-loader/spinner-loader.component"
import Footer from "./components/footer-components/footer.component"
import SwitchRoute from "./components/switch-route/switch-route.component"

const App = ({
  onLoader,
  handleUserSessionStart,
  handleGetCollectionStart,
}) => {
  const handleUseEffect = useCallback(() => {
    handleUserSessionStart()
    handleGetCollectionStart()
  }, [handleUserSessionStart, handleGetCollectionStart])

  useEffect(() => {
    handleUseEffect()
  }, [handleUseEffect])

  return (
    <SpinnerLoader onLoader={onLoader}>
      <Header />
      <SwitchRoute />
      <Footer />
    </SpinnerLoader>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleUserSessionStart: () => dispatch(checkUserSessionStartAC()),
  handleGetCollectionStart: (collections) =>
    dispatch(getCollectionStartAC(collections)),
})

const mapStateToProps = (state) => ({
  onLoader: selectorLoader(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
