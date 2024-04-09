import data from "../../data"
import { useParams } from "react-router-dom"

const EventItemDetails = () => {
  const { eventId } = useParams()
  const eventDetails = data.find((item) => item.id === parseInt(eventId))
  return (
    <></>
  )
}

export default EventItemDetails
