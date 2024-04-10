import { useEffect } from "react"
import Events from "./Routes/Events/events.component"
import Home from "./Routes/Home/home.component"
import Navigation from "./Routes/Navigation/navigation.component"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setEventsList } from "./store/Events/events.reducer"
import { selectEventsList } from "./store/Events/events.selector"
import { eventData } from "./data"


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getEventsData = async () => {
      dispatch(setEventsList(eventData))
    }

    getEventsData()
  }, [])

  console.log("kala", useSelector(selectEventsList))
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
