import { Routes, Route } from "react-router-dom"
import EventList from "../../Components/eventList/eventList.component"
import EventItemDetails from "../../Components/eventItemDetails/eventItemDetails.component"

const Events = () => {
  return (
    <Routes>
      <Route index element={<EventList />} />
      <Route path=":eventId" element={<EventItemDetails />} />
    </Routes>
  )
}

export default Events
