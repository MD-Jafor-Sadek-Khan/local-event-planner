import data from "../../data"
import mapType from '../../Utils/mapType.utils'
import { useParams } from "react-router-dom"
import "leaflet/dist/leaflet.css"
import Map from "../../Map/map.component"
import { Card } from "antd"
import { useState } from "react"
import {
  ButtonContainer,
  CardDescriptionContainer,
  CompanyImage,
  EventDetailsCard,
  EventDetailsContainer,
  EventImage,
  MapContainerCard,
  MapDescription,
  MapDescriptionContainer,
} from "./eventItemDetails.styled"

const EventItemDetails = () => {
  const [activeMapType, setActiveMapType] = useState("normalView")
  const { eventId } = useParams()

  const eventDetails = data.find((item) => item.id === parseInt(eventId))
  const address = { address: eventDetails.location }


  const selectedMapType = (type) => {
    return mapType[type]
  }

  const mapTypeVal = selectedMapType(activeMapType)

  const handleMapTypeChange = (event) => {
    setActiveMapType(event.target.value)
  }

  return (
    <EventDetailsContainer>
      <EventDetailsCard
        title={`Event: ${eventDetails.title}`}
        avatar={eventDetails.companyImageUrl}
        hoverable
        cover={
          <EventImage
            src={eventDetails.eventImageUrl}
            alt={`${eventDetails.eventImageUrl}`}
          />
        }
      >
        <CardDescriptionContainer>
          <Card.Meta
            avatar={
              <CompanyImage
                src={eventDetails.companyImageUrl}
                alt={eventDetails.companyImageUrl}
              />
            }
          />
          <div>{eventDetails.description}</div>
        </CardDescriptionContainer>
      </EventDetailsCard>

      <MapContainerCard hoverable>
        <div id="map">
          <Map positionInfo={address} mapType={mapTypeVal} />
        </div>
        <MapDescriptionContainer>
          <MapDescription
            title={`Location: ${eventDetails.location}`}
            description={`Date: ${eventDetails.date}
            || Time: ${eventDetails.time}`}
          />
          <ButtonContainer
            value="sateliteView"
            onClick={handleMapTypeChange}
            size="large"
          >
            Satelite View
          </ButtonContainer>
          <ButtonContainer
            value="normalView"
            onClick={handleMapTypeChange}
            size="large"
          >
            Normal View
          </ButtonContainer>
        </MapDescriptionContainer>
      </MapContainerCard>
    </EventDetailsContainer>
  )
}

export default EventItemDetails
