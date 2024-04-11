import { styled } from "styled-components"
import { Pagination } from "antd"
import breakPoints from "../../Utils/styled-components/breakPoints"

const { laptop } = breakPoints

export const EventListContainer = styled.div`
  padding: 0 30px;
  @media (max-width: ${laptop.max}px) {
    padding: 0 10px;
  }
`

export const TitleContainer = styled.h1`
  font-size: 44px;
  color: white;
  background-color: grey;
  border-radius: 15px;
  padding: 0 0 7px 25px;
  width: 25%;
  @media (max-width: ${laptop.max}px) {
    font-size: 32px;
    text-align: center;
    margin: 24px auto 0 auto;
    padding: 0 0 7px 0;
    width: 70%;
  }
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
