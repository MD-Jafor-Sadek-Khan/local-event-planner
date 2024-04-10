import styled from "styled-components"
import { Card, Button } from "antd"

export const EventDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 40px 30px; // Removed unnecessary comma
`

export const EventDetailsCard = styled(Card)`
  width: 51%;
  border-radius: 30px; // Corrected formatting
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

export const MapContainerCard = styled(Card)`
  width: 47%;
  text-align: center;
  border-radius: 30px;
  z-index: 0; // Corrected formatting
`

export const MapDescriptionContainer = styled.div`
  display: flex;
  margin: 20px 20px; // Removed unnecessary comma
`

export const MapDescription = styled(Card.Meta)`
  margin-right: 20px; // Corrected formatting
`

export const ButtonContainer = styled(Button)`
  margin: 10px 7px;
`
