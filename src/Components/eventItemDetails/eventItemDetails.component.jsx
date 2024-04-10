import { eventData } from "../../data"
import { useParams } from "react-router-dom"
import "leaflet/dist/leaflet.css"
import { Card } from "antd"
import {
  CardDescriptionContainer,
  CompanyImage,
  EventDetailsCard,
  EventDetailsContainer,
  EventImage,
} from "./eventItemDetails.styled"
import MapCard from "../../MapCard/mapCard.component"

const EventItemDetails = () => {
  const { eventId } = useParams()

  const eventDetails = eventData.find((item) => item.id === parseInt(eventId))

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

      <MapCard eventDetails={eventDetails} />
    </EventDetailsContainer>
  )
}

export default EventItemDetails
