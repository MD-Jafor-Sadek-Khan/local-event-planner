import styled from "styled-components"
import { Card, Button } from "antd"

export const MapContainerCard = styled(Card)`
  width: 47%;
  text-align: center;
  border-radius: 30px;
  z-index: 0;
`

export const MapDescriptionContainer = styled.div`
  display: flex;
  margin: 20px 20px;
`

export const MapDescription = styled(Card.Meta)`
  margin-right: 20px;
`

export const ButtonContainer = styled(Button)`
  margin: 10px 7px;
`
