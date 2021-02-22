import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "../../pages/home-page/home-page.component"
import ShopPage from "../../pages/shop-page/shop-page.component"
import AuthorizationPage from "../../pages/authorization-page/authorization-page.component"
import CheckoutPage from "../../pages/checkout-page/checkout-page.component"

const SwitchRoute = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route exact path="/login" component={AuthorizationPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
  </Switch>
)

export default SwitchRoute
