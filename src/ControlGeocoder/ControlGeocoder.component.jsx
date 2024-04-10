import { useEffect } from "react"
import { useMap } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"

import customIcon from "../Utils/Leaflet/icon"

const ControlGeocoder = ({ positionInfo }) => {
  const map = useMap()

  useEffect(() => {
    var geocoder = L.Control.Geocoder.nominatim()
    const address = positionInfo.address
    if (address) {
      geocoder.geocode(address, (resultArray) => {
        if (resultArray.length > 0) {
          const result = resultArray[0]
          const latlng = result.center

          L.marker(latlng, { icon: customIcon })
            .addTo(map)
            .bindPopup(result.name)
          map.fitBounds(result.bbox)
        }
      })
    }
  }, [positionInfo])

  return null
}

export default ControlGeocoder
