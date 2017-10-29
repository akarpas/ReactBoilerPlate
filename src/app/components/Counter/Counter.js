import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import style from "./style.scss"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}
      >
        Counter -> {this.state.count}
      </button>
    )
  }
}

export default Counter
