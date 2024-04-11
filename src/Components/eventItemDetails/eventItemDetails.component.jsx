import "leaflet/dist/leaflet.css"
import { useParams } from "react-router-dom"
import { eventData } from "../../data"
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
  const { title, companyImageUrl, eventImageUrl, description } = eventDetails

  return (
    <EventDetailsContainer>
      <EventDetailsCard
        title={`Event: ${title}`}
        avatar={companyImageUrl}
        hoverable
        cover={<EventImage src={eventImageUrl} alt={`${title}`} />}
      >
        <CardDescriptionContainer>
          <Card.Meta
            avatar={<CompanyImage src={companyImageUrl} alt={`${title}`} />}
          />
          <div>{description}</div>
        </CardDescriptionContainer>
      </EventDetailsCard>

      <MapCard eventDetails={eventDetails} />
    </EventDetailsContainer>
  )
}

export default EventItemDetails
