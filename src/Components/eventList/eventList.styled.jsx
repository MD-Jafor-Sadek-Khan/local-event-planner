import { styled } from "styled-components"
import { Pagination } from "antd"
import breakPoints from "../../Utils/styled-components/breakPoints"

const { laptop } = breakPoints

export const EventListContainer = styled.div`
  padding: 40px 30px;
`

export const PaginationContainer = styled(Pagination)`
  text-align: center;
  background-color: #001529;
  margin: 40px auto;
  border-radius: 50px;
  padding: 15px 0;
  width: 90%;
  box-shadow: inset 0 0 0 6px black;

  @media (max-width: ${laptop.max}px) {
    box-shadow: inset 0 0 0 4px black;
  }
`
