import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Header from "../../section/Header"
import mapboxgl from "mapbox-gl"

import style from "./style.scss"

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWthcnBhcyIsImEiOiJjajJhNjJneDQwMDBmMzNvMDkxejR1cmJ4In0.6ADEn_N2pMNEEIAZ8mmFKA"

class Map extends React.Component {
  constructor() {
    super()
    this.state = {
      lng: 33.58,
      lat: 34.9,
      zoom: 11
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v9",
      center: [lng, lat],
      zoom
    })

    map.on("move", () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    const { lng, lat, zoom } = this.state

    return (
      <div className="mapContainer inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
        <div ref={el => (this.mapContainer = el)} className="map" />
      </div>
    )
  }
}

export default Map
