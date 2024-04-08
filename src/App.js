import EventList from "./Components/eventList/eventList.component"
import Navigation from "./Routes/Navigation/navigation.component"
import {Layout} from 'antd'



function App() {
  return (
    <Layout style={{ display: "flex" }}>
      <Navigation></Navigation>
      <EventList ></EventList>
    </Layout>
  )
}

export default App
