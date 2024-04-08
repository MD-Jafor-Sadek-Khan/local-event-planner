import React, { useState } from "react"
import data from "../../data"
import EventItem from "../eventItem/eventItem.component"
import { Row, Col, Pagination } from "antd"

const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
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
            <EventItem {...item} />
          </Col>
        ))}
      </Row>
      <Pagination
        total={data.length}
        pageSize={itemsPerPage}
        current={currentPage}
        onChange={handlePageChange}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => {
          return <strong>Total {total} items</strong>
        }}
        style={{ textAlign: "center" }}
      />
    </div>
  )
}

export default EventList
