import { styled } from "styled-components"
import { Pagination } from "antd"

export const EventListContainer = styled.div`
  padding: 40px 30px;
`

export const PaginationContainer = styled(Pagination)`
  text-align: center;
  background-color: #001529;
  margin: 40px auto;
  border-radius: 50px;
  padding: 15px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 90%;
`
