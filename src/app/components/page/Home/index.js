import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Header from "../../section/Header"
import style from "./style.scss"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <Header />
  }
}

export default Home
