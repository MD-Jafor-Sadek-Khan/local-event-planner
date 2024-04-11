import styled from "styled-components"
import { Card } from "antd"
import breakPoints from "../../Utils/styled-components/breakPoints"

const { laptop } = breakPoints

export const EventDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 25px 30px;
  @media (max-width: ${laptop.max}px) {
    flex-direction: column;
    padding: 0;
  }
`

export const EventDetailsCard = styled(Card)`
  width: 51%;
  ${'' /* border-radius: 30px; */}
  @media (max-width: ${laptop.max}px) {
    width: 100%;
    border-radius: 0;
  }
`

export const EventImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50vh;
  padding: 20px 30px;
`

export const CardDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${laptop.max}px) {
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }
`

export const CompanyImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 100px;
`
