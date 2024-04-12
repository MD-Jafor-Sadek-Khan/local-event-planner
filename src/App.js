import { useEffect } from "react"
import Events from "./Routes/Events/events.component"
import Home from "./Routes/Home/home.component"
import Navigation from "./Routes/Navigation/navigation.component"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setEventsList } from "./store/Events/events.reducer"
import { selectEventsList } from "./store/Events/events.selector"
import { eventData } from "./data"
import SignUp from "./Routes/Signup/signUp.route"
import SignUpForm from "./Components/SignUpForm/signUpForm.component"
import AgreementPage from "./Components/AgreementPage/agreementPage.component"

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
      <Route path="signup" element={<SignUpForm />}>
        <Route path="agreement" element={<AgreementPage />} />
      </Route>
    </Routes>
  )
}

export default App
