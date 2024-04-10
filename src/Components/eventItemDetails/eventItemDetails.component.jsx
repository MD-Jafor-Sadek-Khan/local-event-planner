import data from "../../data"
import { useParams } from "react-router-dom"
import "leaflet/dist/leaflet.css"
import Map from "../../Map/map.component"
import { Card, Button } from "antd"
import { Fragment, useState } from "react"

const EventItemDetails = () => {
  const { eventId } = useParams()
  const eventDetails = data.find((item) => item.id === parseInt(eventId))
  const address = { address: eventDetails.location }

  const [activeMapType, setActiveMapType] = useState("normalView")

  const mapType = {
    sateliteView:
      "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png",

    normalView: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  }
  const selectedMapType = (type) => {
    return mapType[type]
  }

  const mapTypeVal = selectedMapType(activeMapType)

  const handleMapTypeChange = (event) => {
    setActiveMapType(event.target.value)
  }

  return (
    <>
      <div>
        <img
          src={eventDetails.eventImageUrl}
          alt={`${eventDetails.eventImageUrl}`}
        />
      </div>
      <Card hoverable style={{ width: "40%", textAlign: "center" }}>
        <div id="map">
          <Map positionInfo={address} mapType={mapTypeVal} />
        </div>
        <div>
          <Card.Meta
            title={`Location: ${eventDetails.location}`}
            description={`Date: ${eventDetails.date}
            || Time: ${eventDetails.time}`}
          />
          <Button
            value="sateliteView"
            onClick={handleMapTypeChange}
            size="large"
            style={{ margin: "10px 4px" }}
          >
            Satelite View
          </Button>
          <Button
            style={{ margin: "10px 4px" }}
            value="normalView"
            onClick={handleMapTypeChange}
            size="large"
          >
            Normal View
          </Button>
        </div>
      </Card>
    </>
  )
}

export default EventItemDetails
