import EventList from "./Components/eventList/eventList.component"
import Events from "./Routes/Events/events.component"
import Home from "./Routes/Home/home.component"
import Navigation from "./Routes/Navigation/navigation.component"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="events/*" element={<Events />} />
      </Route>
    </Routes>
  )
}

export default App
