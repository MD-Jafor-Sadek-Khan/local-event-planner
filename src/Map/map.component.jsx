import { useState, useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import ControlGeocoder from "../ControlGeocoder/ControlGeocoder.component"

const Map = ({ positionInfo, mapType }) => {
  const [latLng, setLatLng] = useState({
    lat: 0.0,
    lng: 0.0,
    isLoaded: false,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatLng({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
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
    <MapContainer center={[latLng.lat, latLng.lng]} zoom={13}>
      <TileLayer url={`${mapType}`} />

      <ControlGeocoder positionInfo={positionInfo} />
    </MapContainer>
  )
}

export default Map
