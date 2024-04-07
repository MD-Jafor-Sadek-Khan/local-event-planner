import data from "../../data"
import EventItem from "../eventItem/eventItem.component"
import { Row, Col } from "antd"
const EventList = () => {
  return (
    <Row justify="center" gutter={[16, { xs: 0, sm: 0, md: 24, lg: 32 }]}>
      {data.map((item) => {
        return (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            key={item.id}
            span={6}
          >
            <EventItem {...item} />
          </Col>
        )
      })}
    </Row>
  )
}

export default EventList
