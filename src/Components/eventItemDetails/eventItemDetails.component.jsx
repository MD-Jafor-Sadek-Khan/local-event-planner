import data from "../../data"
import { useParams } from "react-router-dom"
import "leaflet/dist/leaflet.css"
import Map from "../../Map/map.component"
import { Card, Button, Carousel, Flex } from "antd"
import { Fragment, useState } from "react"

const EventItemDetails = () => {
  const [activeMapType, setActiveMapType] = useState("normalView")
  const { eventId } = useParams()

  const eventDetails = data.find((item) => item.id === parseInt(eventId))
  const address = { address: eventDetails.location }

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        padding: "40px 30px",
      }}
    >
      <Card
        title={`Event: ${eventDetails.title}`}
        avatar={eventDetails.companyImageUrl}
        hoverable
        style={{ width: "51%", borderRadius: "30px" }}
        cover={
          <img
            src={eventDetails.eventImageUrl}
            alt={`${eventDetails.eventImageUrl}`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "50vh",
              padding: "20px 30px",
            }}
          />
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Card.Meta
            avatar={
              <img
                src={eventDetails.companyImageUrl}
                alt={eventDetails.companyImageUrl}
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  borderRadius: "100px",
                }}
              />
            }
          />
          <div>{eventDetails.description}</div>
        </div>
      </Card>

      <Card
        hoverable
        style={{ width: "47%", textAlign: "center", borderRadius: "30px", zIndex:0 }}
      >
        <div id="map">
          <Map positionInfo={address} mapType={mapTypeVal} />
        </div>
        <div style={{ display: "flex", margin: "20px 20px" }}>
          <Card.Meta
            title={`Location: ${eventDetails.location}`}
            description={`Date: ${eventDetails.date}
            || Time: ${eventDetails.time}`}
            style={{ margin: "0 20px 0 0" }}
          />
          <Button
            value="sateliteView"
            onClick={handleMapTypeChange}
            size="large"
            style={{ margin: "10px 7px" }}
          >
            Satelite View
          </Button>
          <Button
            style={{ margin: "10px 7px" }}
            value="normalView"
            onClick={handleMapTypeChange}
            size="large"
          >
            Normal View
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default EventItemDetails
