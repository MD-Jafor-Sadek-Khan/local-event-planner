import styled from "styled-components"
import { Card } from "antd"

export const EventDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 40px 30px;
`

export const EventDetailsCard = styled(Card)`
  width: 51%;
  border-radius: 30px;
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
`

export const CompanyImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 100px;
`
