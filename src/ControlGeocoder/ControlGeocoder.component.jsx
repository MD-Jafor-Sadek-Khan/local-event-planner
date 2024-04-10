import { useEffect } from "react"
import { useMap } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"

import customIcon from "../Utils/Leaflet/icon"

const ControlGeocoder = ({ address }) => {
  const map = useMap()

  useEffect(() => {
    var geocoder = L.Control.Geocoder.nominatim()
    if (address) {
      geocoder.geocode(address, (locationArray) => {
        if (locationArray.length) {
          const { center, name, bbox } = locationArray[0]
          const latlng = center

          L.marker(latlng, { icon: customIcon }).addTo(map).bindPopup(name)
          map.fitBounds(bbox)
        }
      })
    }
  }, [address])

  return <></>
}

export default ControlGeocoder
