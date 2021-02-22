import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

import CollectionAll from "../collections-all/collection-all.component"
import CollectionChosen from "../collection-chosen/collection-chosen.component"

const ShopSwitch = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route exact path="/shop" component={CollectionAll} />
      <Route
        exact
        path={`${match.path}/:collectionChosen`}
        component={CollectionChosen}
      />
    </Switch>
  )
}
export default ShopSwitch
