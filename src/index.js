import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import "./index.styles.scss"

import store from "./redux/store/store"

import App from "./App"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
