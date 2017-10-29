import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import style from "./style.scss"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="dashboard">
        <div className="left">Left</div>
        <div className="middle">Middle</div>
        <div className="right">Right</div>
      </div>
    )
  }
}

export default Header
