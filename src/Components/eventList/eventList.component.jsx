import React, { useState } from "react"
import {eventData} from "../../data"
import EventItemCard from "../eventItemCard/eventItemCard.component"
import { Row, Col } from "antd"
import { EventListContainer, PaginationContainer } from "./eventList.styled"

const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = eventData.slice(indexOfFirstItem, indexOfLastItem)
  const eventCount = eventData.length

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSizeChange = (current, size) => {
    setItemsPerPage(size)
  }

  return (
    <EventListContainer>
      <Row justify="center" gutter={[16, { xs: 0, sm: 0, md: 24, lg: 32 }]}>
        {currentItems.map((item) => (
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
            <EventItemCard {...item} />
          </Col>
        ))}
      </Row>

      <PaginationContainer
        total={eventCount}
        pageSize={itemsPerPage}
        current={currentPage}
        onChange={handlePageChange}
        showSizeChanger
        onShowSizeChange={handleSizeChange}
        showQuickJumper
        responsive
      />
    </EventListContainer>
  )
}
export default EventList
