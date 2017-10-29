import React from "react"
import ReactDOM from "react-dom"
import Counter from "./components/medium/Counter/Counter"
import Home from "./components/page/Home"

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(React.createElement(Home), document.getElementById("mount"))
})
