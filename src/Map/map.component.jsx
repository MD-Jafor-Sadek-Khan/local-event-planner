import { useState, useEffect } from "react"
import { TileLayer } from "react-leaflet"
import ControlGeocoder from "../ControlGeocoder/ControlGeocoder.component"
import { ResponsiveMapContainer } from "./map.styled"

const Map = ({ address, activeMapUrl }) => {
  const [{ latitude, longitude }, setLatLng] = useState({
    latitude: 0.0,
    longitude: 0.0,
    isLoaded: false,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setLatLng({
            latitude,
            longitude,
            isLoaded: true,
          })
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }, [setLatLng])

  return (
    <div id="map">
      <ResponsiveMapContainer center={[latitude, longitude]} zoom={13}>
        <TileLayer url={`${activeMapUrl}`} />

        <ControlGeocoder address={address} />
      </ResponsiveMapContainer>
    </div>
  )
}

export default Map
